from easyvvuq.analysis.results import AnalysisResults
import numpy as np
import pytest


def test_keys_to_tuples():
    assert(AnalysisResults._keys_to_tuples({}) == {})
    assert(AnalysisResults._keys_to_tuples(
        {'a': 1, 'b': 2}) == {('a', 0): 1, ('b', 0): 2})
    assert(AnalysisResults._keys_to_tuples(
        {('a', 0): 1, ('b', 0): 2}) == {('a', 0): 1, ('b', 0): 2})
    assert(AnalysisResults._keys_to_tuples(
        {('a', 0): 1, 'b': 2}) == {('a', 0): 1, ('b', 0): 2})


def test_to_tuple():
    assert(AnalysisResults._to_tuple('a') == ('a', 0))
    assert(AnalysisResults._to_tuple(('a', 0)) == ('a', 0))
    with pytest.raises(RuntimeError):
        AnalysisResults._to_tuple(3)


def test_plotting():
    results = AnalysisResults()
    kappa = np.array([0.19726384, 0.98001541, 0.97884984, 0.97760245, 0.97626742,
       0.97483855, 0.97330924, 0.97167242, 0.96992063, 0.9680459 ,
       0.96603977, 0.96389328, 0.96159695, 0.95914077, 0.95651411,
       0.95370585, 0.95070424, 0.94749696, 0.94407112, 0.94041323,
       0.93650925, 0.93234459, 0.92790414, 0.92317227, 0.91813298,
       0.91276984, 0.90706615, 0.90100496, 0.89456923, 0.88774191,
       0.8805061 , 0.87284519, 0.86474304, 0.85618416, 0.84715394,
       0.83763885, 0.8276267 , 0.81710691, 0.80607073, 0.79451156,
       0.78242517, 0.76981004, 0.75666756, 0.7430023 , 0.72882224,
       0.71413895, 0.69896774, 0.68332775, 0.66724206, 0.65073761,
       0.63384519, 0.61659926, 0.59903778, 0.5812019 , 0.56313564,
       0.54488547, 0.52649989, 0.50802887, 0.48952336, 0.4710347 ,
       0.45261407, 0.43431192, 0.4161774 , 0.39825788, 0.38059843,
       0.36324144, 0.3462262 , 0.32958862, 0.313361  , 0.29757187,
       0.28224586, 0.2674037 , 0.25306221, 0.23923444, 0.22592976,
       0.21315405, 0.20090991, 0.18919689, 0.17801175, 0.16734875,
       0.15719988, 0.14755517, 0.13840294, 0.12973007, 0.12152225,
       0.1137642 , 0.10643989, 0.09953277, 0.0930259 , 0.08690214,
       0.08114432, 0.07573531, 0.07065816, 0.06589622, 0.06143316,
       0.05725307, 0.05334053, 0.0496806 , 0.04625891, 0.04306163,
       0.04007551, 0.0372879 , 0.03468673, 0.0322605 , 0.0299983 ,
       0.02788979, 0.02592518, 0.02409521, 0.02239114, 0.02080475,
       0.01932827, 0.01795441, 0.01667633, 0.01548759, 0.01438215,
       0.01335437, 0.01239895, 0.01151093, 0.01068569, 0.00991888,
       0.00920647, 0.00854467, 0.00792996, 0.00735905, 0.00682888,
       0.00633657, 0.00587946, 0.00545508, 0.00506112, 0.00469541,
       0.00435595, 0.00404089, 0.00374848, 0.00347711, 0.00322528,
       0.00299161, 0.00277478, 0.00257359, 0.00238693, 0.00221375,
       0.00205308, 0.00190403, 0.00176576, 0.00163749, 0.00151852,
       0.00140815, 0.00130578, 0.00121084, 0.00112277, 0.00104109])
    t_env = np.array([0.17448336, 0.01853271, 0.01970001, 0.02094925, 0.02228626,
       0.02371725, 0.02524883, 0.02688807, 0.02864246, 0.03051998,
       0.0325291 , 0.03467878, 0.03697853, 0.03943838, 0.04206895,
       0.04488141, 0.04788752, 0.05109961, 0.05453059, 0.05819397,
       0.06210382, 0.06627475, 0.0707219 , 0.07546089, 0.0805078 ,
       0.08587904, 0.09159135, 0.0976617 , 0.10410717, 0.11094482,
       0.11819158, 0.12586409, 0.13397851, 0.14255036, 0.15159426,
       0.16112375, 0.17115105, 0.18168677, 0.19273964, 0.2043163 ,
       0.21642096, 0.22905515, 0.24221748, 0.25590336, 0.2701048 ,
       0.28481022, 0.30000428, 0.31566781, 0.33177769, 0.34830693,
       0.36522471, 0.38249651, 0.4000843 , 0.41794688, 0.43604017,
       0.4543176 , 0.47273062, 0.49122919, 0.50976227, 0.52827844,
       0.54672646, 0.56505579, 0.58321722, 0.6011633 , 0.61884888,
       0.63623155, 0.65327193, 0.66993406, 0.68618559, 0.70199797,
       0.71734653, 0.7322105 , 0.74657303, 0.76042107, 0.77374523,
       0.78653963, 0.79880166, 0.81053178, 0.82173322, 0.83241175,
       0.84257538, 0.8522341 , 0.86139961, 0.87008505, 0.87830475,
       0.88607403, 0.89340891, 0.900326  , 0.90684225, 0.91297481,
       0.91874091, 0.92415769, 0.92924212, 0.93401089, 0.93848034,
       0.9426664 , 0.94658452, 0.95024967, 0.95367623, 0.95687806,
       0.95986842, 0.96265999, 0.96526485, 0.96769452, 0.96995991,
       0.9720714 , 0.97403878, 0.97587133, 0.97757779, 0.97916642,
       0.98064498, 0.98202076, 0.98330063, 0.98449104, 0.98559802,
       0.98662724, 0.98758399, 0.98847325, 0.98929964, 0.99006751,
       0.99078091, 0.99144363, 0.99205919, 0.99263089, 0.9931618 ,
       0.99365479, 0.99411252, 0.99453749, 0.994932  , 0.99529821,
       0.99563813, 0.99595363, 0.99624644, 0.99651818, 0.99677035,
       0.99700435, 0.99722148, 0.99742294, 0.99760985, 0.99778327,
       0.99794416, 0.99809341, 0.99823187, 0.99836031, 0.99847945,
       0.99858996, 0.99869246, 0.99878754, 0.99887573, 0.99895751])
    test_data = {'kappa': kappa, 't_env': t_env}
    results.sobols_first = lambda qoi, input_: test_data[input_]
    results.inputs = ['kappa', 't_env']
    results.plot_sobols_first('t', ['kappa', 't_env'], filename='test.svg')
