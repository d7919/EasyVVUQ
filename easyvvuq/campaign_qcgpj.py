from easyvvuq import Campaign
from easyvvuq.constants import Status

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


class CampaignQCGPJ(Campaign):
    """ This extends the standard Campaign to enable execution on clusters using
    the QCG-PilotJob mechanism.
    """

    def apply_for_each_run_dir(self, action, manager, status=Status.ENCODED):
        """
        For each run in this Campaign's run list, apply the specified action
        (an object of type Action)

        Parameters
        ----------
        action : the action to be applied to each run directory
            The function to be applied to each run directory. func() will
            be called with the run directory path as its only argument.
        manager : a QCG-PilotJob manager instance that should be used
            for execution of actions

        Returns
        -------
        """
        run_dirs = []
        for run_id, run_data in self.campaign_db.runs(status=status, app_id=self._active_app['id']):
            run_dirs.append(run_data['run_dir'])
            action.act_on_dir(run_data['run_dir'])

        manager.wait4all()
