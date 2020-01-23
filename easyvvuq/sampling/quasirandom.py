from .base import BaseSamplingElement

class LHCSampler(BaseSamplingElement, sampler_name='lhc_sampler'):
    def __init__(self, vary=None, order=1):
        """
            Expects dict of var names, and their ranges
        """
        self.vary = Vary(vary)
        self.samples = np.array([vary[param][0] + row * (vary[param][1] - vary[param][0])
                                     for row, param in
                                     zip(cp.create_latin_hypercube_samples(order=order, dim=dim), vary)])
        self.order = order
        self.dim = len(vary)
        def sample_generator():
            for sample in zip(*self.samples):
                yield {key : value for key, value in zip(vary.keys(), sample)}
        self.sample_generator = sample_generator()

    def element_version(self):
        return "0.1"

    def is_finite(self):
        return True

    def __next__(self):
        return next(self.sample_generator)

    def is_restartable(self):
        return False

