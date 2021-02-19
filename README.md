<img align="left" width="75" height="75" src="https://github.com/UCL-CCS/EasyVVUQ/blob/dev/docs/images/circle-logo.svg" alt="EasyVVUQ icon">

# EasyVVUQ

[![Build Status](https://travis-ci.org/UCL-CCS/EasyVVUQ.svg?branch=master)](https://travis-ci.org/UCL-CCS/EasyVVUQ)
[![Language grade: Python](https://img.shields.io/lgtm/grade/python/g/UCL-CCS/EasyVVUQ.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/UCL-CCS/EasyVVUQ/context:python)
[![Documentation Status](https://readthedocs.org/projects/easyvvuq/badge/?version=latest)](https://easyvvuq.readthedocs.io/)
[![Coverage Status](https://coveralls.io/repos/github/UCL-CCS/EasyVVUQ/badge.svg?branch=dev&service=github)](https://coveralls.io/github/UCL-CCS/EasyVVUQ?branch=dev)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/3796/badge)](https://bestpractices.coreinfrastructure.org/projects/3796)
[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/UCL-CCS/EasyVVUQ/dev?filepath=tutorials)

The aim of this library is to facilitate verification, validation and 
uncertainty quantification (VVUQ) for a wide variety of
simulations. We want you to be able to take your existing simulation,
no matter what programming language or platform, and allow you to sample the parameter space
of that simulation using a variety of statistical method on a variety of computing resources
that might be available to you. All of this is to be achieved using a minimal amount of set-up
overhead. EasyVVUQ is especially suitable for cases where the simulation is computationally expensive, 
you want to use heterogeneous computing resources or the runs are very large and bookkeeping is prohibitively
complex. It coordinates execution using an efficient back-end database and all the work is resumable.

Basic concepts are introduced [here](https://mybinder.org/v2/gh/UCL-CCS/EasyVVUQ/a6852d6c5ba36f15579e601d7a8d074505f31084?filepath=tutorials%2Fbasic_tutorial.ipynb) and [here](https://mybinder.org/v2/gh/UCL-CCS/EasyVVUQ/74d6a9f4b0eecc754918de2f3795395d35ac4875?filepath=tutorials%2Fvector_qoi_tutorial.ipynb).

Available analysis and sampling methods:

* Polynomial Chaos Expansion
* Stochastic Collocation
* Markov-Chain Monte Carlo

EasyVVUQ also supports building surrogate models using:

* Gaussian Processes

Supported computing resources:

* Traditional clusters
* [Kubernetes clusters](https://mybinder.org/v2/gh/UCL-CCS/EasyVVUQ/a9195fa1423d731ed996c9a5e34bb1256c6a0d5b?filepath=tutorials%2Fkubernetes_tutorial.ipynb)

The easiest way to get started is to follow the tutorials in our
[Binder](https://mybinder.org/v2/gh/UCL-CCS/EasyVVUQ/dev?filepath=tutorials).

Development was funded by the EU Horizon 2020 project [VECMA](http://www.vecma.eu/).

## Requirements

To use the library you will need Python 3.6+.

## Installation using pip

If you are unsure of the version of python your default `pip` works for type:
```
pip --version
```

If the output ends with `(python 2.7)` you should replace `pip` with `pip3` in the following commands.

The following should fully install the library:
```
pip install easyvvuq
```

To upgrade the library use:

```
pip install easyvvuq --upgrade
```

## Manual installation from repository

Alternatively, you can manually install EasyVVUQ.
First clone the repository to your computer:
```
git clone https://github.com/UCL-CCS/EasyVVUQ.git
```

Note: As above, you need to be sure you are installing for Python 3 - if necessary replace `pip` with `pip3` and `python` with `python3` in the commands below.

We are trying to keep dependencies at a minimum but a few are inevitable, to install them use:
```
cd EasyVVUQ/

pip install -r requirements.txt
```

Then the library can be installed using:
```buildoutcfg
python setup.py install
```

## Getting Started

Documentation, including a basic tutorial, is avalable [here](https://easyvvuq.readthedocs.io/en/dev/).

## Citing EasyVVUQ

> Richardson, R A, Wright, D W, Edeling, W, Jancauskas, V, Lakhlili, J and Coveney, P V. 
2020 EasyVVUQ: A Library for Verification, Validation and Uncertainty Quantification in High Performance Computing. 
Journal of Open Research Software, 8: 11.
> [DOI: 10.5334/jors.303](https://doi.org/10.5334/jors.303).

> Wright, D.W., Richardson, R.A., Edeling, W., Lakhlili, J., Sinclair, R.C., Jancauskas, V., Suleimenova, D., Bosak, B., Kulczewski, M., Piontek, T., Kopta, P., Chirca, I., Arabnejad, H., Luk, O.O., Hoenen, O., Weglarz, J., Crommelin, D., Groen, D. and Coveney, P.V. (2020), Building Confidence in Simulation: Applications of EasyVVUQ. Adv. Theory Simul., 3: 1900246.
> [DOI: 10.1002/adts.201900246](https://doi.org/10.1002/adts.201900246).
