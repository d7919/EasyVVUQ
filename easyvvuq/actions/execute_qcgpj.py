"""Provides action to execute a QCG-PilotJob task in a given directory.
"""

import os
import logging
from . import BaseAction

__copyright__ = """
    Copyright 2021 Bartosz Bosak

    This file is part of EasyVVUQ

    EasyVVUQ is free software: you can redistribute it and/or modify
    it under the terms of the Lesser GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    EasyVVUQ is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    Lesser GNU General Public License for more details.

    You should have received a copy of the Lesser GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
"""
__license__ = "LGPL"

from qcg.pilotjob.api.job import Jobs

import easyvvuq

logger = logging.getLogger(__name__)


class ActionStatusQCGPJ:
    def __init__(self, qcgpj_manager):
        self.qcgpj_manager = qcgpj_manager
        pass

    def start(self):
        return None

    def finished(self):
        return True

    def finalise(self):
        return None

    def succeeded(self):
        return True


class ExecuteQCGPJ(BaseAction):

    def __init__(self, qcpj_manager, run_cmd, model=None, modules=None, venv=None, task_requirements=None):
        """
        Provides an action element to run a command as a QCGPJ task.

        Parameters
        ----------
        qcgpj_manager : Manager
            QCGPJ Manager that will be used for execution of commands
        run_cmd : str
            Command to execute
        model : str, optional
            Allows to set the flavour of execution of task by QCG-PilotJob adjusted to a given resource.
            At the moment of writing a user can select from the following models:
            `threads, intelmpi, openmpi, srunmpi, default`
        modules : str or list(str) or None
            Modules that should be loaded on start of a QCGPJ task
        venv : str or None
            Virtual environment that should be loaded on start of a QCGPJ task
        task_requirements : TaskRequirements or None
            Requirements of a QCG-PilotJob task
        """

        self.qcgpj_manager = qcpj_manager
#        self.run_cmd = os.path.realpath(os.path.expanduser(run_cmd))
        self.run_cmd = run_cmd
        self.model = model
        self.modules = modules
        self.venv = venv
        self.task_requirements = task_requirements

    def act_on_dir(self, target_dir):
        """
        Executes `self.run_cmd` in the shell in `target_dir`.

        target_dir : str
            Directory in which to execute command.
        """
        task = self._prepare_task(target_dir)
        jobs = Jobs().add_std(task)
        self.qcgpj_manager.submit(jobs)

        return ActionStatusQCGPJ(self.qcgpj_manager)

    def _prepare_task(self, target_dir):

        key = os.path.basename(os.path.normpath(target_dir))
        args = self.run_cmd.split()

        exec = args[0]
        args.pop(0)

        task = {
            "name": 'execute_' + key,
            "execution": {
                "wd": target_dir,
                "model": self.model,
                "modules": self.modules,
                "venv": self.venv,
                "exec": exec,
                "args": args,
                "stdout": f"execute_{key}.stdout",
                "stderr": f"execute_{key}.stderr"
            }
        }

        if self.task_requirements:
            task.update(self.task_requirements.get_resources())

        return task
