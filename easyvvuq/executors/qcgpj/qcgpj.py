import os
from enum import Enum

from qcg.pilotjob.api.manager import LocalManager

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


def _setup_qcgpj_logging(log_level):

    log_level = log_level.upper()

    try:
        service_log_level = ServiceLogLevel[log_level].value
    except KeyError:
        service_log_level = ServiceLogLevel.DEBUG.value

    try:
        client_log_level = ClientLogLevel[log_level].value
    except KeyError:
        client_log_level = ClientLogLevel.DEBUG.value

    return service_log_level, client_log_level


class QCGPJ:
    """Simplifies initialisation of QCG-PilotJob Manager

    """

    def create_manager(self,
                       resources=None,
                       reserve_core=False,
                       work_dir=".",
                       resume=False,
                       log_level='info'):
        """Creates new QCG-PilotJob Manager and sets is as the Executor's engine.

        Parameters
        ----------
        resources : str, optional
            The resources to use. If specified forces usage of Local mode of QCG-PilotJob Manager.
            The format is compliant with the NODES format of QCG-PilotJob, i.e.:
            [node_name:]cores_on_node[,node_name2:cores_on_node][,...].
            Eg. to run on 4 cores regardless the node use `resources="4"`
            to run on 2 cores of node_1 and on 3 cores of node_2 use `resources="node_1:2,node_2:3"`
        reserve_core : bool, optional
            If True reserves a core for QCG-PilotJob Manager instance,
            by default QCG-PilotJob Manager shares a core with computing tasks
            Parameters.
        work_dir : str, optional
            The directory where QCG-PilotJob Manager will be started. By default current dir.
        resume : bool, optional
            If True, the QCG-PilotJob Manager service will try to resume previously started workflow.
        log_level : str, optional
            Logging level for QCG-PilotJob Manager (for both service and client part).

        Returns
        -------
        Manager : QCG-PilotJob manager instance

        """

        # ---- QCG PILOT JOB INITIALISATION ---
        # Establish logging levels
        service_log_level, client_log_level = _setup_qcgpj_logging(log_level)

        # Prepare input arguments for QCG-PJM
        client_conf = {'log_file': work_dir + '/api.log', 'log_level': client_log_level}

        common_args = ['--log', service_log_level,
                       '--wd', work_dir]

        args = common_args

        if resources:
            args.append('--nodes')
            args.append(str(resources))

        if reserve_core:
            args.append('--system-core')

        if resume:
            args.append('--resume')

        # create QCGPJ Manager (service part)
        _qcgpjm = LocalManager(args, client_conf)

        return _qcgpjm


class ServiceLogLevel(Enum):
    CRITICAL = "critical"
    ERROR = "error"
    WARNING = "warning"
    INFO = "info"
    DEBUG = "debug"


class ClientLogLevel(Enum):
    INFO = "info"
    DEBUG = "debug"
