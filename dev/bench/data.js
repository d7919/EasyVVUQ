window.BENCHMARK_DATA = {
  "lastUpdate": 1618405094095,
  "repoUrl": "https://github.com/UCL-CCS/EasyVVUQ",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "distinct": true,
          "id": "63e0ef3a17702e294e559223e02e254d14ef0beb",
          "message": "switch to random sampler in the benchmark",
          "timestamp": "2021-03-05T10:36:11+01:00",
          "tree_id": "12bbfb4786ec32dded71e2f06ee12567c31d266f",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/63e0ef3a17702e294e559223e02e254d14ef0beb"
        },
        "date": 1614937979811,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.016968405793070566,
            "unit": "iter/sec",
            "range": "stddev: 1.6657898172267298",
            "extra": "mean: 58.933055479400004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.12581519660829585,
            "unit": "iter/sec",
            "range": "stddev: 0.04407669845616022",
            "extra": "mean: 7.948165459799975 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.8837793767907066,
            "unit": "iter/sec",
            "range": "stddev: 0.019093985161128556",
            "extra": "mean: 1.1315041131999806 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.017861498281560688,
            "unit": "iter/sec",
            "range": "stddev: 0.6876158411863663",
            "extra": "mean: 55.98634471960001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.13678770683100816,
            "unit": "iter/sec",
            "range": "stddev: 0.08577785617245892",
            "extra": "mean: 7.31059846799999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.8788672877017757,
            "unit": "iter/sec",
            "range": "stddev: 0.023556023549316057",
            "extra": "mean: 1.1378282182000248 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "distinct": true,
          "id": "5c50000306784e571e642b17fe8bc737d151ef90",
          "message": "another typo in the benchmark",
          "timestamp": "2021-03-05T10:46:12+01:00",
          "tree_id": "c78908feec592add4ae406bf7df8c04bce42e47b",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/5c50000306784e571e642b17fe8bc737d151ef90"
        },
        "date": 1614938577631,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.017482682938384297,
            "unit": "iter/sec",
            "range": "stddev: 0.18012740520735981",
            "extra": "mean: 57.19945866 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.10844356823695446,
            "unit": "iter/sec",
            "range": "stddev: 0.08016638635136153",
            "extra": "mean: 9.22138598219999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.7280318465556737,
            "unit": "iter/sec",
            "range": "stddev: 0.042578129239668874",
            "extra": "mean: 1.3735662865999756 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.018192478490293547,
            "unit": "iter/sec",
            "range": "stddev: 0.4976523526012892",
            "extra": "mean: 54.967771463000055 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.12147321030897262,
            "unit": "iter/sec",
            "range": "stddev: 0.30325163100790237",
            "extra": "mean: 8.232267818200034 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.7852006277666463,
            "unit": "iter/sec",
            "range": "stddev: 0.051753611805625876",
            "extra": "mean: 1.2735598579999987 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "distinct": true,
          "id": "5684e7db3bb40325cda1ca798cba9a0cd8684fd4",
          "message": "update draw_runs",
          "timestamp": "2021-03-05T11:12:18+01:00",
          "tree_id": "6eb4be6ecdf84101e3b836534d9fb0d52d559a88",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/5684e7db3bb40325cda1ca798cba9a0cd8684fd4"
        },
        "date": 1614939547038,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.07678228087427019,
            "unit": "iter/sec",
            "range": "stddev: 0.13976582539602264",
            "extra": "mean: 13.023838164399995 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.10993628376474687,
            "unit": "iter/sec",
            "range": "stddev: 0.1003318943658082",
            "extra": "mean: 9.096177947400008 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.7568487427783457,
            "unit": "iter/sec",
            "range": "stddev: 0.032386084143275255",
            "extra": "mean: 1.3212679674000127 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.07643009683108958,
            "unit": "iter/sec",
            "range": "stddev: 0.044486313577701615",
            "extra": "mean: 13.083851015000004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.110530184047251,
            "unit": "iter/sec",
            "range": "stddev: 0.06947507769450233",
            "extra": "mean: 9.047302405400012 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.7489156009902067,
            "unit": "iter/sec",
            "range": "stddev: 0.039666039505285966",
            "extra": "mean: 1.3352639451999835 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "e2afe737804279d492fada6e1ed0fdd385aceb16",
          "message": "Cleanup",
          "timestamp": "2021-03-05T10:12:25Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/323/commits/e2afe737804279d492fada6e1ed0fdd385aceb16"
        },
        "date": 1614946668118,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.055265531877230094,
            "unit": "iter/sec",
            "range": "stddev: 0.09092270906727676",
            "extra": "mean: 18.0944607974 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.0922476323884889,
            "unit": "iter/sec",
            "range": "stddev: 0.1839751164435058",
            "extra": "mean: 10.840386621399995 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.6329884571472183,
            "unit": "iter/sec",
            "range": "stddev: 0.03935230478262955",
            "extra": "mean: 1.5798076390000007 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.0555402885910414,
            "unit": "iter/sec",
            "range": "stddev: 0.11304612223697509",
            "extra": "mean: 18.004947856199998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.09159195378462923,
            "unit": "iter/sec",
            "range": "stddev: 0.12298306422299944",
            "extra": "mean: 10.91798961239997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.6244598026955269,
            "unit": "iter/sec",
            "range": "stddev: 0.035640884833310224",
            "extra": "mean: 1.6013841014000036 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "9ad218bf385aa4def8f1945e0123d2cdb2df2aeb",
          "message": "Cleanup",
          "timestamp": "2021-03-05T10:12:25Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/323/commits/9ad218bf385aa4def8f1945e0123d2cdb2df2aeb"
        },
        "date": 1614946741770,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.0756077212414739,
            "unit": "iter/sec",
            "range": "stddev: 0.04176873355067803",
            "extra": "mean: 13.226162402199995 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.10938733904225156,
            "unit": "iter/sec",
            "range": "stddev: 0.027876338711772173",
            "extra": "mean: 9.141825815999999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.7581730588328497,
            "unit": "iter/sec",
            "range": "stddev: 0.028908339619988586",
            "extra": "mean: 1.318960082199999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.07538925789886586,
            "unit": "iter/sec",
            "range": "stddev: 0.1598356526009098",
            "extra": "mean: 13.264489237199985 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.10910255453412464,
            "unit": "iter/sec",
            "range": "stddev: 0.03116949744269527",
            "extra": "mean: 9.165688230399997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.7530518495914815,
            "unit": "iter/sec",
            "range": "stddev: 0.03239639516963097",
            "extra": "mean: 1.3279298106000055 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "f9aec014f8a995a3a737816afcd65fd59ea4ee46",
          "message": "Cleanup",
          "timestamp": "2021-03-05T10:12:25Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/323/commits/f9aec014f8a995a3a737816afcd65fd59ea4ee46"
        },
        "date": 1614947121234,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.0711781626562015,
            "unit": "iter/sec",
            "range": "stddev: 0.18669086186619271",
            "extra": "mean: 14.049252786 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.09839679523720782,
            "unit": "iter/sec",
            "range": "stddev: 0.38822561099751207",
            "extra": "mean: 10.162932619799994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.7152947009182175,
            "unit": "iter/sec",
            "range": "stddev: 0.03580962238876645",
            "extra": "mean: 1.3980251758000009 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.07133509489140209,
            "unit": "iter/sec",
            "range": "stddev: 0.09869597526707134",
            "extra": "mean: 14.018345409400002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.09920195943500758,
            "unit": "iter/sec",
            "range": "stddev: 0.4606392143578559",
            "extra": "mean: 10.080446048600004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.7014125790013253,
            "unit": "iter/sec",
            "range": "stddev: 0.03577052382783376",
            "extra": "mean: 1.4256944200000021 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "238971c1f7f12b341febaf14e6b93012b83efb3d",
          "message": "Cleanup",
          "timestamp": "2021-03-05T10:12:25Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/323/commits/238971c1f7f12b341febaf14e6b93012b83efb3d"
        },
        "date": 1614947434026,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.05831000101957147,
            "unit": "iter/sec",
            "range": "stddev: 0.12279070764647589",
            "extra": "mean: 17.1497167298 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.10001229837231368,
            "unit": "iter/sec",
            "range": "stddev: 0.03497026994557346",
            "extra": "mean: 9.998770313999994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.6742794362263158,
            "unit": "iter/sec",
            "range": "stddev: 0.04544915472505505",
            "extra": "mean: 1.4830646558000011 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.05834125424559189,
            "unit": "iter/sec",
            "range": "stddev: 0.14575275260389017",
            "extra": "mean: 17.140529680600025 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.09928713734747449,
            "unit": "iter/sec",
            "range": "stddev: 0.2089972685909612",
            "extra": "mean: 10.071798087000001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.6446207032495066,
            "unit": "iter/sec",
            "range": "stddev: 0.055641789991376575",
            "extra": "mean: 1.551299849599991 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "b2713821790e1437aa3c6e5b5328cec3f09c62b4",
          "message": "Cleanup",
          "timestamp": "2021-03-05T10:12:25Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/323/commits/b2713821790e1437aa3c6e5b5328cec3f09c62b4"
        },
        "date": 1614947670823,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.056241474401435315,
            "unit": "iter/sec",
            "range": "stddev: 0.06775661728793413",
            "extra": "mean: 17.780472696399997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.09421896551605836,
            "unit": "iter/sec",
            "range": "stddev: 0.07179729132468804",
            "extra": "mean: 10.613574395799997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.6403820347494495,
            "unit": "iter/sec",
            "range": "stddev: 0.03319480374122224",
            "extra": "mean: 1.5615678543999933 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.0558541391486172,
            "unit": "iter/sec",
            "range": "stddev: 0.23405103075552228",
            "extra": "mean: 17.903776071799996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.09482208255911184,
            "unit": "iter/sec",
            "range": "stddev: 0.2555055717563184",
            "extra": "mean: 10.546066623000002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.6608715448023504,
            "unit": "iter/sec",
            "range": "stddev: 0.037329328342748144",
            "extra": "mean: 1.5131533622000233 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "d58e95617a7093b3d1faa963385b1669b7113ec2",
          "message": "Cleanup",
          "timestamp": "2021-03-05T10:12:25Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/323/commits/d58e95617a7093b3d1faa963385b1669b7113ec2"
        },
        "date": 1614948236838,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.05710803526120733,
            "unit": "iter/sec",
            "range": "stddev: 0.3844741111138171",
            "extra": "mean: 17.510670703799992 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.09553438143796229,
            "unit": "iter/sec",
            "range": "stddev: 0.08730583671409864",
            "extra": "mean: 10.467435753999997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.6378356269988744,
            "unit": "iter/sec",
            "range": "stddev: 0.03696381367971343",
            "extra": "mean: 1.567802044400014 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.055141050522488154,
            "unit": "iter/sec",
            "range": "stddev: 0.34035760297477624",
            "extra": "mean: 18.135309184799997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.09436969253802027,
            "unit": "iter/sec",
            "range": "stddev: 0.521070817431925",
            "extra": "mean: 10.596622422999985 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.6365352466248927,
            "unit": "iter/sec",
            "range": "stddev: 0.034051850171614856",
            "extra": "mean: 1.5710049134000201 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "fbed52d9da66103da4d6e393d0eeb79f06527233",
          "message": "Cleanup",
          "timestamp": "2021-03-05T10:12:25Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/323/commits/fbed52d9da66103da4d6e393d0eeb79f06527233"
        },
        "date": 1614948435995,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.07081671830473428,
            "unit": "iter/sec",
            "range": "stddev: 0.04058843487197305",
            "extra": "mean: 14.1209593432 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.10098746821080352,
            "unit": "iter/sec",
            "range": "stddev: 0.02182202610511429",
            "extra": "mean: 9.902218737799995 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.7047643204282038,
            "unit": "iter/sec",
            "range": "stddev: 0.0371427547808901",
            "extra": "mean: 1.418914055399989 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.07063817885968185,
            "unit": "iter/sec",
            "range": "stddev: 0.08894993778325706",
            "extra": "mean: 14.156650357399997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.10144231760635321,
            "unit": "iter/sec",
            "range": "stddev: 0.03142991951928608",
            "extra": "mean: 9.857818941799996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.7019682067614761,
            "unit": "iter/sec",
            "range": "stddev: 0.03758526979976274",
            "extra": "mean: 1.4245659423999997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "978a58a96032f3b59b22739d82d5f476274006cf",
          "message": "Cleanup",
          "timestamp": "2021-03-05T10:12:25Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/323/commits/978a58a96032f3b59b22739d82d5f476274006cf"
        },
        "date": 1614948792734,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.07523024991239813,
            "unit": "iter/sec",
            "range": "stddev: 0.3449015590304297",
            "extra": "mean: 13.292525296200001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.10830947549484794,
            "unit": "iter/sec",
            "range": "stddev: 0.10431925521275226",
            "extra": "mean: 9.2328025358 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.7393705984069544,
            "unit": "iter/sec",
            "range": "stddev: 0.03837707578203886",
            "extra": "mean: 1.3525017118000051 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.07434582580575737,
            "unit": "iter/sec",
            "range": "stddev: 0.20351151536880852",
            "extra": "mean: 13.450654279000014 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.10510571382595153,
            "unit": "iter/sec",
            "range": "stddev: 0.05573517701043746",
            "extra": "mean: 9.514230612199992 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.7083482139761526,
            "unit": "iter/sec",
            "range": "stddev: 0.043353824134359835",
            "extra": "mean: 1.4117350481999893 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "2ceae9b6c1b891ca17d9d4bbf0f19f0127a852eb",
          "message": "Cleanup",
          "timestamp": "2021-03-05T10:12:25Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/323/commits/2ceae9b6c1b891ca17d9d4bbf0f19f0127a852eb"
        },
        "date": 1614950596812,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.052511350207492494,
            "unit": "iter/sec",
            "range": "stddev: 0.10357548409356857",
            "extra": "mean: 19.043501948599992 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.09059100143852855,
            "unit": "iter/sec",
            "range": "stddev: 0.029058948092200707",
            "extra": "mean: 11.038623970599996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.6137446947722988,
            "unit": "iter/sec",
            "range": "stddev: 0.03913364688328385",
            "extra": "mean: 1.6293419861999836 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.05238272164374448,
            "unit": "iter/sec",
            "range": "stddev: 0.10569519191465644",
            "extra": "mean: 19.090264282199996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.09102462381190952,
            "unit": "iter/sec",
            "range": "stddev: 0.036613357534949875",
            "extra": "mean: 10.986038262200008 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.5917642502879342,
            "unit": "iter/sec",
            "range": "stddev: 0.05990919350470751",
            "extra": "mean: 1.689862135999988 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "9659dfb843d478c68219271cc3ffa69ecf3727ff",
          "message": "Cleanup",
          "timestamp": "2021-03-05T10:12:25Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/323/commits/9659dfb843d478c68219271cc3ffa69ecf3727ff"
        },
        "date": 1614954566363,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.07099977366614052,
            "unit": "iter/sec",
            "range": "stddev: 0.06787235377426552",
            "extra": "mean: 14.084551940999997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.10264630458627842,
            "unit": "iter/sec",
            "range": "stddev: 0.027361690431936037",
            "extra": "mean: 9.742191928199997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.7141955017011935,
            "unit": "iter/sec",
            "range": "stddev: 0.03181498504165594",
            "extra": "mean: 1.4001768390000051 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.07056874993191603,
            "unit": "iter/sec",
            "range": "stddev: 0.04259541881101322",
            "extra": "mean: 14.170578350399989 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.10218283835588038,
            "unit": "iter/sec",
            "range": "stddev: 0.02948541076368828",
            "extra": "mean: 9.78637916199998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.7075109339380053,
            "unit": "iter/sec",
            "range": "stddev: 0.033753463332543025",
            "extra": "mean: 1.413405718599995 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "35cea447834dc495fb830c4c6946a6a53a1def18",
          "message": "Cleanup",
          "timestamp": "2021-03-05T10:12:25Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/323/commits/35cea447834dc495fb830c4c6946a6a53a1def18"
        },
        "date": 1614954673774,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.05875587218669318,
            "unit": "iter/sec",
            "range": "stddev: 0.12180834432177022",
            "extra": "mean: 17.0195754532 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.0996593070210593,
            "unit": "iter/sec",
            "range": "stddev: 0.0725768475688176",
            "extra": "mean: 10.034185766399991 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.6814934875915356,
            "unit": "iter/sec",
            "range": "stddev: 0.036103400881031145",
            "extra": "mean: 1.4673654527999929 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.05879477343037526,
            "unit": "iter/sec",
            "range": "stddev: 0.10307357473919013",
            "extra": "mean: 17.008314543199994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.09934497496562093,
            "unit": "iter/sec",
            "range": "stddev: 0.03567920753069933",
            "extra": "mean: 10.065934390199981 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.6744330950375694,
            "unit": "iter/sec",
            "range": "stddev: 0.04849632409121526",
            "extra": "mean: 1.4827267631999803 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "b3cbddde5ed8f35beb0f99d261156c10f16b994d",
          "message": "Cleanup",
          "timestamp": "2021-03-05T10:12:25Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/323/commits/b3cbddde5ed8f35beb0f99d261156c10f16b994d"
        },
        "date": 1614954928554,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.09224381221492055,
            "unit": "iter/sec",
            "range": "stddev: 0.5113254236710731",
            "extra": "mean: 10.840835563800004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.13316085650668197,
            "unit": "iter/sec",
            "range": "stddev: 0.08283730247178765",
            "extra": "mean: 7.509714387799994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.9071104208465302,
            "unit": "iter/sec",
            "range": "stddev: 0.02265929295940244",
            "extra": "mean: 1.1024016227999938 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.09369191792008305,
            "unit": "iter/sec",
            "range": "stddev: 0.07331440159651562",
            "extra": "mean: 10.673279213399985 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.13499954517856744,
            "unit": "iter/sec",
            "range": "stddev: 0.04714941769229169",
            "extra": "mean: 7.407432363399994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.885401091096487,
            "unit": "iter/sec",
            "range": "stddev: 0.024559074729384914",
            "extra": "mean: 1.1294316327999923 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "e36577f1821f92958b2fc9395468adcfbb3fa8cd",
          "message": "Cleanup",
          "timestamp": "2021-03-05T10:12:25Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/323/commits/e36577f1821f92958b2fc9395468adcfbb3fa8cd"
        },
        "date": 1614955186091,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.06246729171689625,
            "unit": "iter/sec",
            "range": "stddev: 1.000225939232609",
            "extra": "mean: 16.008377704800004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.10813330695855557,
            "unit": "iter/sec",
            "range": "stddev: 0.5238529540290635",
            "extra": "mean: 9.247844425800015 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.6991906972418163,
            "unit": "iter/sec",
            "range": "stddev: 0.04485405927821726",
            "extra": "mean: 1.430224978600006 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.06351707344418236,
            "unit": "iter/sec",
            "range": "stddev: 0.713970843280216",
            "extra": "mean: 15.743798411600016 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.10661776807579165,
            "unit": "iter/sec",
            "range": "stddev: 0.6244124797730493",
            "extra": "mean: 9.379299698799992 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.7566383346120701,
            "unit": "iter/sec",
            "range": "stddev: 0.07484790185510751",
            "extra": "mean: 1.3216353894000121 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "a9f05a9717ed935282df8b9ffdd0d2f071b1dae9",
          "message": "Cleanup",
          "timestamp": "2021-03-05T10:12:25Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/323/commits/a9f05a9717ed935282df8b9ffdd0d2f071b1dae9"
        },
        "date": 1614955216116,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.05424884705005109,
            "unit": "iter/sec",
            "range": "stddev: 0.26821154443882655",
            "extra": "mean: 18.433571483600005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.0946774827524968,
            "unit": "iter/sec",
            "range": "stddev: 0.12730775577818065",
            "extra": "mean: 10.562173506599999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.6319832286363634,
            "unit": "iter/sec",
            "range": "stddev: 0.03553304171675484",
            "extra": "mean: 1.582320471000014 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.052874418118189194,
            "unit": "iter/sec",
            "range": "stddev: 0.1926605230723552",
            "extra": "mean: 18.912737682800003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.09278337418411518,
            "unit": "iter/sec",
            "range": "stddev: 0.019028034650598095",
            "extra": "mean: 10.777792991399997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.6276847932631764,
            "unit": "iter/sec",
            "range": "stddev: 0.04670700882377546",
            "extra": "mean: 1.5931563274000156 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41d9296692d07ad0649a0c3b10473d711511af28",
          "message": "Merge pull request #323 from UCL-CCS/cleanup\n\nCleanup",
          "timestamp": "2021-03-05T15:36:37+01:00",
          "tree_id": "963da216a70fde98313711d4356681bdbcca4553",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/41d9296692d07ad0649a0c3b10473d711511af28"
        },
        "date": 1614955514490,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.055058152510481406,
            "unit": "iter/sec",
            "range": "stddev: 0.08701182088424836",
            "extra": "mean: 18.162614515800005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.09192588946690053,
            "unit": "iter/sec",
            "range": "stddev: 0.033047916043101665",
            "extra": "mean: 10.878328246800015 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.625198596600553,
            "unit": "iter/sec",
            "range": "stddev: 0.03592950514925965",
            "extra": "mean: 1.5994917542000053 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.05459063782859201,
            "unit": "iter/sec",
            "range": "stddev: 0.12483986556968406",
            "extra": "mean: 18.318159299399998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.0914793362651133,
            "unit": "iter/sec",
            "range": "stddev: 0.059163773613396836",
            "extra": "mean: 10.931430428200008 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.6279274347485236,
            "unit": "iter/sec",
            "range": "stddev: 0.023661696484267945",
            "extra": "mean: 1.5925407055999812 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "distinct": true,
          "id": "9e15f8183945c2986492223612a3b3b8752c7e4c",
          "message": "experiment with fixed string lengths in the database",
          "timestamp": "2021-03-05T15:42:06+01:00",
          "tree_id": "aade91182a22441e2c9bef65b1baa22e0a856af1",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/9e15f8183945c2986492223612a3b3b8752c7e4c"
        },
        "date": 1614955766457,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.07005240281242801,
            "unit": "iter/sec",
            "range": "stddev: 0.05085239219074827",
            "extra": "mean: 14.275027834199998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.10283739585467563,
            "unit": "iter/sec",
            "range": "stddev: 0.008469423256029056",
            "extra": "mean: 9.724089099000008 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.6964499396593747,
            "unit": "iter/sec",
            "range": "stddev: 0.03892653055400142",
            "extra": "mean: 1.435853380200001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.07009761377398453,
            "unit": "iter/sec",
            "range": "stddev: 0.04478448264154397",
            "extra": "mean: 14.265820848400006 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.10304331325817655,
            "unit": "iter/sec",
            "range": "stddev: 0.0046201564544703965",
            "extra": "mean: 9.704656890199999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.6912586436138628,
            "unit": "iter/sec",
            "range": "stddev: 0.038726915281497236",
            "extra": "mean: 1.4466365220000057 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "distinct": true,
          "id": "56beaf5f903cbe74254f9ef9eea2747e762bff7e",
          "message": "typo",
          "timestamp": "2021-03-05T16:01:01+01:00",
          "tree_id": "c9a9f6aaa70d3389a16efa0aa513bcb96e98d9cc",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/56beaf5f903cbe74254f9ef9eea2747e762bff7e"
        },
        "date": 1614956903283,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.07004979306696195,
            "unit": "iter/sec",
            "range": "stddev: 0.09261292872638854",
            "extra": "mean: 14.275559658599999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.10240916449146001,
            "unit": "iter/sec",
            "range": "stddev: 0.01566427394054151",
            "extra": "mean: 9.764751084199997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.6961262225534123,
            "unit": "iter/sec",
            "range": "stddev: 0.040641284539070205",
            "extra": "mean: 1.4365210899999852 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.07046760458505018,
            "unit": "iter/sec",
            "range": "stddev: 0.060728635083427324",
            "extra": "mean: 14.190918023799998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.10237663103595848,
            "unit": "iter/sec",
            "range": "stddev: 0.02022326600114367",
            "extra": "mean: 9.767854146799994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.6970848012597378,
            "unit": "iter/sec",
            "range": "stddev: 0.03750560401409054",
            "extra": "mean: 1.4345456939999963 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "distinct": true,
          "id": "7c5040a5cc74eab0f08e53c2d61854cdb9431e57",
          "message": "more risky pragmas",
          "timestamp": "2021-03-05T16:10:11+01:00",
          "tree_id": "8f57339d4f9e8239fbe11a1345970872b8937774",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/7c5040a5cc74eab0f08e53c2d61854cdb9431e57"
        },
        "date": 1614957514138,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.05528576638568422,
            "unit": "iter/sec",
            "range": "stddev: 0.19479772736852244",
            "extra": "mean: 18.08783825159999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.09720572547338416,
            "unit": "iter/sec",
            "range": "stddev: 0.03893054317171724",
            "extra": "mean: 10.287459870600003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.6427337224558197,
            "unit": "iter/sec",
            "range": "stddev: 0.031841570203445364",
            "extra": "mean: 1.5558542598000031 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.05546970461298859,
            "unit": "iter/sec",
            "range": "stddev: 0.18530046088657745",
            "extra": "mean: 18.027858756 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.09650195432436318,
            "unit": "iter/sec",
            "range": "stddev: 0.05456320171648578",
            "extra": "mean: 10.362484438799981 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.6391546502553271,
            "unit": "iter/sec",
            "range": "stddev: 0.042132612586534314",
            "extra": "mean: 1.564566571799992 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "distinct": true,
          "id": "634cde8fb3b1285a59d356064f50643b0f31d463",
          "message": "move pragmas to an event listener",
          "timestamp": "2021-03-05T16:19:55+01:00",
          "tree_id": "061db97fdd08c23e86cd9c1219323da4fb122d7b",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/634cde8fb3b1285a59d356064f50643b0f31d463"
        },
        "date": 1614957998964,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.0763930553563667,
            "unit": "iter/sec",
            "range": "stddev: 0.23564679509793163",
            "extra": "mean: 13.090195114399998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.11162518609424621,
            "unit": "iter/sec",
            "range": "stddev: 0.13434068270543525",
            "extra": "mean: 8.958551694200002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.770820744382078,
            "unit": "iter/sec",
            "range": "stddev: 0.03858943995538993",
            "extra": "mean: 1.297318484599998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.07747059220503306,
            "unit": "iter/sec",
            "range": "stddev: 0.17811053805458926",
            "extra": "mean: 12.908123864000004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.10946822509107433,
            "unit": "iter/sec",
            "range": "stddev: 0.14538718314375154",
            "extra": "mean: 9.135070922800015 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.7724327515906234,
            "unit": "iter/sec",
            "range": "stddev: 0.04400720987046884",
            "extra": "mean: 1.2946110815999987 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "distinct": true,
          "id": "c0eb4e34a326e852fbe4421e7a905e77252048c7",
          "message": "cache increase",
          "timestamp": "2021-03-05T16:53:37+01:00",
          "tree_id": "59d17f6ed0c5907d4855b21e8df65d18ce5eed30",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/c0eb4e34a326e852fbe4421e7a905e77252048c7"
        },
        "date": 1614960051619,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.07052010012835516,
            "unit": "iter/sec",
            "range": "stddev: 0.049886292383725994",
            "extra": "mean: 14.180354227799992 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.1027637358916464,
            "unit": "iter/sec",
            "range": "stddev: 0.00928165097023449",
            "extra": "mean: 9.731059223599999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.7101015010422368,
            "unit": "iter/sec",
            "range": "stddev: 0.036449310631203984",
            "extra": "mean: 1.4082493819999968 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.0706937017739991,
            "unit": "iter/sec",
            "range": "stddev: 0.05175387932884715",
            "extra": "mean: 14.145531707999998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.10313708451082568,
            "unit": "iter/sec",
            "range": "stddev: 0.0075150829522477305",
            "extra": "mean: 9.69583350879999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.7060545183049204,
            "unit": "iter/sec",
            "range": "stddev: 0.03752226822125744",
            "extra": "mean: 1.4163212246000172 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "distinct": true,
          "id": "46cbcd5a1fd03e19f13394c3a541687290df2c33",
          "message": "changed permissions on mcmc script",
          "timestamp": "2021-03-05T17:05:06+01:00",
          "tree_id": "3854c7cd769e5307ee5f2ee056ed44d9165f79c4",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/46cbcd5a1fd03e19f13394c3a541687290df2c33"
        },
        "date": 1614960768916,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.0605030247828301,
            "unit": "iter/sec",
            "range": "stddev: 0.6550189671956397",
            "extra": "mean: 16.52809927420002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.10161905188312431,
            "unit": "iter/sec",
            "range": "stddev: 0.09465508299278627",
            "extra": "mean: 9.840674376200003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.7207196416410897,
            "unit": "iter/sec",
            "range": "stddev: 0.04603557345189175",
            "extra": "mean: 1.3875020774000064 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.0612642620542276,
            "unit": "iter/sec",
            "range": "stddev: 0.14350918310640953",
            "extra": "mean: 16.322729866799953 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.10375221079036652,
            "unit": "iter/sec",
            "range": "stddev: 0.03422734315693978",
            "extra": "mean: 9.638348834999965 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.7087972791499754,
            "unit": "iter/sec",
            "range": "stddev: 0.04277537454697367",
            "extra": "mean: 1.410840630200005 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "distinct": true,
          "id": "f8c601476317fce0a7c6f33aa7bf44a74af71d7d",
          "message": "set temp_store to memory",
          "timestamp": "2021-03-05T17:18:50+01:00",
          "tree_id": "ae408859a3411c2067eaa5fb99d3d05e45a1fb75",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/f8c601476317fce0a7c6f33aa7bf44a74af71d7d"
        },
        "date": 1614961673544,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.05142978301674843,
            "unit": "iter/sec",
            "range": "stddev: 0.06300923914301726",
            "extra": "mean: 19.4439863702 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.0889650600505124,
            "unit": "iter/sec",
            "range": "stddev: 0.07582660052344005",
            "extra": "mean: 11.240367841400007 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.6231869787151751,
            "unit": "iter/sec",
            "range": "stddev: 0.0420152734742625",
            "extra": "mean: 1.6046548374000054 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.05129649798738376,
            "unit": "iter/sec",
            "range": "stddev: 0.08496787576731521",
            "extra": "mean: 19.494508187399994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.08913796713581147,
            "unit": "iter/sec",
            "range": "stddev: 0.0537279477092978",
            "extra": "mean: 11.218564121799977 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.6168245898463907,
            "unit": "iter/sec",
            "range": "stddev: 0.04163212060185263",
            "extra": "mean: 1.6212064442000156 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "distinct": true,
          "id": "4689374db6809e7c93a028d44ea763b648db029d",
          "message": "more frequent commits to the db",
          "timestamp": "2021-03-08T17:49:06+01:00",
          "tree_id": "7c0406d1c885e21e490af7ee8dc5e90865160e56",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/4689374db6809e7c93a028d44ea763b648db029d"
        },
        "date": 1615222550017,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.0775585472576343,
            "unit": "iter/sec",
            "range": "stddev: 0.07325772471320031",
            "extra": "mean: 12.893485442399998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.11151620213359562,
            "unit": "iter/sec",
            "range": "stddev: 0.10749459391820855",
            "extra": "mean: 8.967306820599998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.7651457241310413,
            "unit": "iter/sec",
            "range": "stddev: 0.06267495855585355",
            "extra": "mean: 1.3069405845999824 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.077599498181949,
            "unit": "iter/sec",
            "range": "stddev: 0.11893094133979575",
            "extra": "mean: 12.8866812728 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.11183649331322107,
            "unit": "iter/sec",
            "range": "stddev: 0.08319531021205694",
            "extra": "mean: 8.94162513839999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.7615318649608176,
            "unit": "iter/sec",
            "range": "stddev: 0.014684819964399253",
            "extra": "mean: 1.313142687800007 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "distinct": true,
          "id": "0b390222e0e46401d6b1d788832b284d76a4b4aa",
          "message": "added db benchmarking utility",
          "timestamp": "2021-03-09T14:11:51+01:00",
          "tree_id": "16e07c55336fd4969a6df84e49f9f0996c71ef56",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/0b390222e0e46401d6b1d788832b284d76a4b4aa"
        },
        "date": 1615295949924,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.0703207188121331,
            "unit": "iter/sec",
            "range": "stddev: 0.037170791695053856",
            "extra": "mean: 14.220559984199998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.102848276963064,
            "unit": "iter/sec",
            "range": "stddev: 0.0165815832285608",
            "extra": "mean: 9.723060313000001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.7168210236132977,
            "unit": "iter/sec",
            "range": "stddev: 0.032835248865907114",
            "extra": "mean: 1.395048369199992 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.07062704496567057,
            "unit": "iter/sec",
            "range": "stddev: 0.06497870115333647",
            "extra": "mean: 14.158882061200018 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.10291958065004923,
            "unit": "iter/sec",
            "range": "stddev: 0.01713546609625999",
            "extra": "mean: 9.716324082200014 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.6989073432022759,
            "unit": "iter/sec",
            "range": "stddev: 0.03466776901925474",
            "extra": "mean: 1.4308048266000015 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "a595d5b2b9b8dc4355cad7312cec9cd59188e449",
          "message": "The rework of the actions system",
          "timestamp": "2021-03-09T13:11:57Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/324/commits/a595d5b2b9b8dc4355cad7312cec9cd59188e449"
        },
        "date": 1615464772706,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.07030213553334141,
            "unit": "iter/sec",
            "range": "stddev: 0.03691390088716751",
            "extra": "mean: 14.22431896860005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.10353712832519597,
            "unit": "iter/sec",
            "range": "stddev: 0.022726939205746324",
            "extra": "mean: 9.65837102280002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.7048307045006532,
            "unit": "iter/sec",
            "range": "stddev: 0.03968575565132572",
            "extra": "mean: 1.418780415799938 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.07041090024734259,
            "unit": "iter/sec",
            "range": "stddev: 0.051902309729248676",
            "extra": "mean: 14.202346461800015 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.10365355262726977,
            "unit": "iter/sec",
            "range": "stddev: 0.009344536146847174",
            "extra": "mean: 9.647522681599957 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.696511579273153,
            "unit": "iter/sec",
            "range": "stddev: 0.03569465487586648",
            "extra": "mean: 1.4357263105999665 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "ca7f1547d3cfa12ebad0a610ed4ceaf5e2a55792",
          "message": "The rework of the actions system",
          "timestamp": "2021-03-09T13:11:57Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/324/commits/ca7f1547d3cfa12ebad0a610ed4ceaf5e2a55792"
        },
        "date": 1615472883119,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.07090136818046872,
            "unit": "iter/sec",
            "range": "stddev: 0.1693200542573761",
            "extra": "mean: 14.104100183999993 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.1007513036419884,
            "unit": "iter/sec",
            "range": "stddev: 0.19891679417278302",
            "extra": "mean: 9.925429883800007 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.7116706912092639,
            "unit": "iter/sec",
            "range": "stddev: 0.03390753756229283",
            "extra": "mean: 1.405144278599994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.07137067050392853,
            "unit": "iter/sec",
            "range": "stddev: 0.22832365870229962",
            "extra": "mean: 14.011357787999987 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.09847993821320623,
            "unit": "iter/sec",
            "range": "stddev: 0.09968357458900856",
            "extra": "mean: 10.154352430999996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.6840603547693184,
            "unit": "iter/sec",
            "range": "stddev: 0.0504130816566238",
            "extra": "mean: 1.461859312600018 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "cc0e76ac48c24829853c8cd945932e144458b5c3",
          "message": "The rework of the actions system",
          "timestamp": "2021-03-09T13:11:57Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/324/commits/cc0e76ac48c24829853c8cd945932e144458b5c3"
        },
        "date": 1615553873876,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.057148618124584126,
            "unit": "iter/sec",
            "range": "stddev: 0.0860537549317031",
            "extra": "mean: 17.498235877199996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.09792085523875674,
            "unit": "iter/sec",
            "range": "stddev: 0.02722789648488765",
            "extra": "mean: 10.212329105600002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.665492156684673,
            "unit": "iter/sec",
            "range": "stddev: 0.030630052788159678",
            "extra": "mean: 1.5026473113999828 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.056739728366390754,
            "unit": "iter/sec",
            "range": "stddev: 0.32222884450726463",
            "extra": "mean: 17.624335342999995 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.0962212463039065,
            "unit": "iter/sec",
            "range": "stddev: 0.03306860803284024",
            "extra": "mean: 10.3927151062 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.6460529780614123,
            "unit": "iter/sec",
            "range": "stddev: 0.03510216274919767",
            "extra": "mean: 1.5478606769999943 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "65a687c9c428cfb2c5172d949c8b33dd0cd3e142",
          "message": "The rework of the actions system",
          "timestamp": "2021-03-09T13:11:57Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/324/commits/65a687c9c428cfb2c5172d949c8b33dd0cd3e142"
        },
        "date": 1615554586016,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.058010857953449804,
            "unit": "iter/sec",
            "range": "stddev: 0.3791326957665626",
            "extra": "mean: 17.238152223199997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.09530251156167842,
            "unit": "iter/sec",
            "range": "stddev: 0.06655229627789562",
            "extra": "mean: 10.492902900599995 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.6697821064275342,
            "unit": "iter/sec",
            "range": "stddev: 0.034755693564235246",
            "extra": "mean: 1.4930228658000033 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.06016366994899697,
            "unit": "iter/sec",
            "range": "stddev: 0.26559476110073893",
            "extra": "mean: 16.621326472400007 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.1000579917969934,
            "unit": "iter/sec",
            "range": "stddev: 0.08014240283689648",
            "extra": "mean: 9.994204181400017 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.7094837373985138,
            "unit": "iter/sec",
            "range": "stddev: 0.049955923254763265",
            "extra": "mean: 1.409475576800014 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "a36445db5d564fb9c803b5959a1ba753aa4f337a",
          "message": "The rework of the actions system",
          "timestamp": "2021-03-09T13:11:57Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/324/commits/a36445db5d564fb9c803b5959a1ba753aa4f337a"
        },
        "date": 1615558502927,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.05670433767285388,
            "unit": "iter/sec",
            "range": "stddev: 0.11877854044364863",
            "extra": "mean: 17.63533516199998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.09886049085940819,
            "unit": "iter/sec",
            "range": "stddev: 0.04476770710746864",
            "extra": "mean: 10.115264362000016 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.6341279215506419,
            "unit": "iter/sec",
            "range": "stddev: 0.03486253118509116",
            "extra": "mean: 1.576968882799997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.05682622308391211,
            "unit": "iter/sec",
            "range": "stddev: 0.161020846227891",
            "extra": "mean: 17.597509489999993 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.09542450046362708,
            "unit": "iter/sec",
            "range": "stddev: 0.05492797429064992",
            "extra": "mean: 10.479488969199997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.6390937033666189,
            "unit": "iter/sec",
            "range": "stddev: 0.05226408247203395",
            "extra": "mean: 1.56471577599998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "5634a6e6199cb0dff4ab21aa18ee2986e50c76dd",
          "message": "The rework of the actions system",
          "timestamp": "2021-03-09T13:11:57Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/324/commits/5634a6e6199cb0dff4ab21aa18ee2986e50c76dd"
        },
        "date": 1615565863988,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.04810692264686154,
            "unit": "iter/sec",
            "range": "stddev: 0.8498232696352855",
            "extra": "mean: 20.7870290798 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.08440905921941233,
            "unit": "iter/sec",
            "range": "stddev: 0.17506284424524143",
            "extra": "mean: 11.847069606600007 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.5916148831405075,
            "unit": "iter/sec",
            "range": "stddev: 0.08958097714572368",
            "extra": "mean: 1.690288781600009 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.04726455249912468,
            "unit": "iter/sec",
            "range": "stddev: 0.9208273562934111",
            "extra": "mean: 21.157504876799997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.08260480405143214,
            "unit": "iter/sec",
            "range": "stddev: 0.17211140652786383",
            "extra": "mean: 12.105833449799979 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.5521718207473004,
            "unit": "iter/sec",
            "range": "stddev: 0.06335066661309284",
            "extra": "mean: 1.8110304843999756 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "56eee420472efed692b9a1654c5c8db29d86a5c8",
          "message": "The rework of the actions system",
          "timestamp": "2021-03-09T13:11:57Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/324/commits/56eee420472efed692b9a1654c5c8db29d86a5c8"
        },
        "date": 1615804590593,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.07088521008699246,
            "unit": "iter/sec",
            "range": "stddev: 0.046965475682601086",
            "extra": "mean: 14.1073151758 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.10337296721963456,
            "unit": "iter/sec",
            "range": "stddev: 0.010851975234792468",
            "extra": "mean: 9.673708967600003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.7026257948023902,
            "unit": "iter/sec",
            "range": "stddev: 0.03929406332446619",
            "extra": "mean: 1.423232690000009 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.07099137251020542,
            "unit": "iter/sec",
            "range": "stddev: 0.03729968658144",
            "extra": "mean: 14.086218714200015 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.10332405167205258,
            "unit": "iter/sec",
            "range": "stddev: 0.009275829286777539",
            "extra": "mean: 9.678288683200014 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.6991505183469469,
            "unit": "iter/sec",
            "range": "stddev: 0.0381017657795709",
            "extra": "mean: 1.4303071709999926 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "f41904daad69a007f3457b48e757f49b096c3bcb",
          "message": "The rework of the actions system",
          "timestamp": "2021-03-09T13:11:57Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/324/commits/f41904daad69a007f3457b48e757f49b096c3bcb"
        },
        "date": 1615804748626,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.056884964025797166,
            "unit": "iter/sec",
            "range": "stddev: 0.07439781811994436",
            "extra": "mean: 17.579337828999996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.0961239689683588,
            "unit": "iter/sec",
            "range": "stddev: 0.03578095215249993",
            "extra": "mean: 10.403232520799998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.6520932440342051,
            "unit": "iter/sec",
            "range": "stddev: 0.029372293388472373",
            "extra": "mean: 1.533523018599999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.056797807388103444,
            "unit": "iter/sec",
            "range": "stddev: 0.06368524536786804",
            "extra": "mean: 17.606313447399987 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.09593582492750073,
            "unit": "iter/sec",
            "range": "stddev: 0.02148728208038062",
            "extra": "mean: 10.423634765800012 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.6538784977549207,
            "unit": "iter/sec",
            "range": "stddev: 0.03505381758529092",
            "extra": "mean: 1.5293361127999787 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "7f5dfb87308bb679eff3cf175c1764fd05c3b5a0",
          "message": "The rework of the actions system",
          "timestamp": "2021-03-09T13:11:57Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/324/commits/7f5dfb87308bb679eff3cf175c1764fd05c3b5a0"
        },
        "date": 1615804758583,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.07369699800444933,
            "unit": "iter/sec",
            "range": "stddev: 0.05093405461686795",
            "extra": "mean: 13.569073735400005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.10304179172570543,
            "unit": "iter/sec",
            "range": "stddev: 0.06636466498190692",
            "extra": "mean: 9.7048001908 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.7099943883151142,
            "unit": "iter/sec",
            "range": "stddev: 0.03663303541200802",
            "extra": "mean: 1.4084618363999994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.07177947716632985,
            "unit": "iter/sec",
            "range": "stddev: 0.04345411337453566",
            "extra": "mean: 13.931558705600015 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.10372554942464847,
            "unit": "iter/sec",
            "range": "stddev: 0.031068603641208108",
            "extra": "mean: 9.640826253 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.7148897546647934,
            "unit": "iter/sec",
            "range": "stddev: 0.03833996676205738",
            "extra": "mean: 1.3988170812000136 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "7fd26eebdd84dafa21268db75b076bd2417b554d",
          "message": "The rework of the actions system",
          "timestamp": "2021-03-09T13:11:57Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/324/commits/7fd26eebdd84dafa21268db75b076bd2417b554d"
        },
        "date": 1615824131136,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.07068448002622103,
            "unit": "iter/sec",
            "range": "stddev: 0.06902846199314838",
            "extra": "mean: 14.1473771842 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.10332702492260201,
            "unit": "iter/sec",
            "range": "stddev: 0.020559661233555872",
            "extra": "mean: 9.678010189000009 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.7173508305905715,
            "unit": "iter/sec",
            "range": "stddev: 0.02824939132197561",
            "extra": "mean: 1.3940180415999976 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.07088524398271763,
            "unit": "iter/sec",
            "range": "stddev: 0.07027011408717261",
            "extra": "mean: 14.107308430000012 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.10283058776017769,
            "unit": "iter/sec",
            "range": "stddev: 0.02286464942816628",
            "extra": "mean: 9.724732900799983 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.7122361407312309,
            "unit": "iter/sec",
            "range": "stddev: 0.036739096749979654",
            "extra": "mean: 1.4040287241999976 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "e37a9c58a5764a565f4751ca2dd4d9e553697c24",
          "message": "The rework of the actions system",
          "timestamp": "2021-03-09T13:11:57Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/324/commits/e37a9c58a5764a565f4751ca2dd4d9e553697c24"
        },
        "date": 1615825495449,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.07146428177183048,
            "unit": "iter/sec",
            "range": "stddev: 0.06788778045122323",
            "extra": "mean: 13.9930042702 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.10434655139093653,
            "unit": "iter/sec",
            "range": "stddev: 0.02335344184284738",
            "extra": "mean: 9.583450403199999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.710296338754998,
            "unit": "iter/sec",
            "range": "stddev: 0.026779234557505686",
            "extra": "mean: 1.4078630923999866 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.07155557912743266,
            "unit": "iter/sec",
            "range": "stddev: 0.05129134422523316",
            "extra": "mean: 13.97515067579999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.1039749113350074,
            "unit": "iter/sec",
            "range": "stddev: 0.03969228093519269",
            "extra": "mean: 9.617704763200015 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.7134211482425891,
            "unit": "iter/sec",
            "range": "stddev: 0.033815456119031986",
            "extra": "mean: 1.4016966030000049 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "cd6a3ebae474bcf7a799cfff8e874ac09a665143",
          "message": "The rework of the actions system",
          "timestamp": "2021-03-09T13:11:57Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/324/commits/cd6a3ebae474bcf7a799cfff8e874ac09a665143"
        },
        "date": 1615825755682,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.056284744775434256,
            "unit": "iter/sec",
            "range": "stddev: 0.13633726838743748",
            "extra": "mean: 17.766803491599994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.09695102565465843,
            "unit": "iter/sec",
            "range": "stddev: 0.03570248685813795",
            "extra": "mean: 10.314486033000009 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.6647724112421856,
            "unit": "iter/sec",
            "range": "stddev: 0.037008820122587396",
            "extra": "mean: 1.5042742194000085 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.05667043220323906,
            "unit": "iter/sec",
            "range": "stddev: 0.07022528049289088",
            "extra": "mean: 17.645886242999996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.09712008118418641,
            "unit": "iter/sec",
            "range": "stddev: 0.022448900958963944",
            "extra": "mean: 10.296531755399986 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.6593946083989257,
            "unit": "iter/sec",
            "range": "stddev: 0.029752628212355296",
            "extra": "mean: 1.5165425789999971 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "1d554de6476b492d4925b4b353441f52fe01cd97",
          "message": "Dpc/new/dask tutorial",
          "timestamp": "2021-03-09T13:11:57Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/325/commits/1d554de6476b492d4925b4b353441f52fe01cd97"
        },
        "date": 1615961208789,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.0586799760252541,
            "unit": "iter/sec",
            "range": "stddev: 0.08215117578178577",
            "extra": "mean: 17.0415884214 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.07664960688604598,
            "unit": "iter/sec",
            "range": "stddev: 0.132406038494498",
            "extra": "mean: 13.046381326999988 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.6622081890729975,
            "unit": "iter/sec",
            "range": "stddev: 0.039858008622166395",
            "extra": "mean: 1.5100991145999956 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.05869726114250465,
            "unit": "iter/sec",
            "range": "stddev: 0.09600352483399967",
            "extra": "mean: 17.03657002960001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.07621238637184935,
            "unit": "iter/sec",
            "range": "stddev: 0.05454195473058944",
            "extra": "mean: 13.121226714000011 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.6716595156481909,
            "unit": "iter/sec",
            "range": "stddev: 0.04266669761910801",
            "extra": "mean: 1.4888495981999768 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "7987afec5b642c75908ff504fdb2e436c1467e8b",
          "message": "Dpc/new/dask tutorial",
          "timestamp": "2021-03-09T13:11:57Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/325/commits/7987afec5b642c75908ff504fdb2e436c1467e8b"
        },
        "date": 1615966594244,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.07403790634293832,
            "unit": "iter/sec",
            "range": "stddev: 0.2400717808758288",
            "extra": "mean: 13.50659478899999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.0805240798445966,
            "unit": "iter/sec",
            "range": "stddev: 0.28803492911138895",
            "extra": "mean: 12.41864547759999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.7365408321517866,
            "unit": "iter/sec",
            "range": "stddev: 0.02979674599643236",
            "extra": "mean: 1.3576979800000004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.07484794918903884,
            "unit": "iter/sec",
            "range": "stddev: 0.25062202334988254",
            "extra": "mean: 13.360419501599996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.08191594672853704,
            "unit": "iter/sec",
            "range": "stddev: 0.056098069296232435",
            "extra": "mean: 12.207635264399993 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.7575334635642602,
            "unit": "iter/sec",
            "range": "stddev: 0.03429652189269368",
            "extra": "mean: 1.3200736972000073 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "189c26992bcabe8a5e71ece637b04e40ec9a998c",
          "message": "Merge pull request #325 from UCL-CCS/dpc/new/dask-tutorial\n\nDpc/new/dask tutorial",
          "timestamp": "2021-03-17T09:46:50+01:00",
          "tree_id": "a332bad7721ade4c667dac80ccbe01fbcd52dbc0",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/189c26992bcabe8a5e71ece637b04e40ec9a998c"
        },
        "date": 1615971304355,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.06244323075458417,
            "unit": "iter/sec",
            "range": "stddev: 0.409982420176776",
            "extra": "mean: 16.01454613919999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.08083670241205786,
            "unit": "iter/sec",
            "range": "stddev: 0.22401327446467548",
            "extra": "mean: 12.3706184216 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.7130826242026673,
            "unit": "iter/sec",
            "range": "stddev: 0.0410289952159203",
            "extra": "mean: 1.40236203500001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.06168575932934558,
            "unit": "iter/sec",
            "range": "stddev: 0.47315269537148924",
            "extra": "mean: 16.2111970554 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.0830935366429861,
            "unit": "iter/sec",
            "range": "stddev: 0.23272916537915775",
            "extra": "mean: 12.0346303744 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.7179253563630772,
            "unit": "iter/sec",
            "range": "stddev: 0.06701086307167453",
            "extra": "mean: 1.3929024670000216 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "653e5f846a3ee401dd84bda7611868796439afd2",
          "message": "missed a '%matplotlib inline' needed for binder",
          "timestamp": "2021-03-17T08:46:54Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/326/commits/653e5f846a3ee401dd84bda7611868796439afd2"
        },
        "date": 1615974132180,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.08658802195472703,
            "unit": "iter/sec",
            "range": "stddev: 0.06831477810290762",
            "extra": "mean: 11.548941498200003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.10118211700904078,
            "unit": "iter/sec",
            "range": "stddev: 0.05614106024117175",
            "extra": "mean: 9.883169373800001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.856634187126193,
            "unit": "iter/sec",
            "range": "stddev: 0.039114989202507874",
            "extra": "mean: 1.1673594341999887 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.08674482031722212,
            "unit": "iter/sec",
            "range": "stddev: 0.07417144511682094",
            "extra": "mean: 11.528065841199998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.101089247547836,
            "unit": "iter/sec",
            "range": "stddev: 0.0509670648937696",
            "extra": "mean: 9.892248921199997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.8496648858390287,
            "unit": "iter/sec",
            "range": "stddev: 0.037560872244615594",
            "extra": "mean: 1.1769345969999905 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d95f4e99cdbb7d2753c1926e1ab6b211995d4d9",
          "message": "Merge pull request #326 from UCL-CCS/dpc/fix/dask-tutorial\n\nmissed a '%matplotlib inline' needed for binder",
          "timestamp": "2021-03-17T10:45:11+01:00",
          "tree_id": "8b1835bf6265a8e4afbfdab3649ac98be84deed8",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/4d95f4e99cdbb7d2753c1926e1ab6b211995d4d9"
        },
        "date": 1615974807122,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.0694130554269488,
            "unit": "iter/sec",
            "range": "stddev: 0.08103651280721588",
            "extra": "mean: 14.406511769999998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.07440692010294611,
            "unit": "iter/sec",
            "range": "stddev: 0.05380124380142817",
            "extra": "mean: 13.439610168200005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.6814333517489433,
            "unit": "iter/sec",
            "range": "stddev: 0.04087488854863495",
            "extra": "mean: 1.4674949464000178 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.06946342528102312,
            "unit": "iter/sec",
            "range": "stddev: 0.04855515602899678",
            "extra": "mean: 14.396065209199993 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.07444492582738714,
            "unit": "iter/sec",
            "range": "stddev: 0.05782988209878779",
            "extra": "mean: 13.43274896019999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.6821401848211543,
            "unit": "iter/sec",
            "range": "stddev: 0.0395553719668982",
            "extra": "mean: 1.4659743294000236 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "11b28094fcf247ae9111eb7248f0ec3901356b5c",
          "message": "The rework of the actions system",
          "timestamp": "2021-03-17T09:45:15Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/324/commits/11b28094fcf247ae9111eb7248f0ec3901356b5c"
        },
        "date": 1615978706824,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.067655500145203,
            "unit": "iter/sec",
            "range": "stddev: 0.06959361410927244",
            "extra": "mean: 14.7807642816 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.07642778914587595,
            "unit": "iter/sec",
            "range": "stddev: 0.04255289876432442",
            "extra": "mean: 13.084246073000008 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.6854073802171545,
            "unit": "iter/sec",
            "range": "stddev: 0.03899906117194955",
            "extra": "mean: 1.4589863325999999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.06774263483405239,
            "unit": "iter/sec",
            "range": "stddev: 0.061352581691731085",
            "extra": "mean: 14.76175236539998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.07624354731790542,
            "unit": "iter/sec",
            "range": "stddev: 0.10309705205126755",
            "extra": "mean: 13.115864032799994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.6830032690484397,
            "unit": "iter/sec",
            "range": "stddev: 0.039725391729538546",
            "extra": "mean: 1.4641218355999968 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "30f2ef8357265d74cca9f11b7d1f469f71dbf7d4",
          "message": "The rework of the actions system",
          "timestamp": "2021-03-17T09:45:15Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/324/commits/30f2ef8357265d74cca9f11b7d1f469f71dbf7d4"
        },
        "date": 1615980617873,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.05316983914225507,
            "unit": "iter/sec",
            "range": "stddev: 0.07174345754952562",
            "extra": "mean: 18.8076551694 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.06817835334612488,
            "unit": "iter/sec",
            "range": "stddev: 0.25790875499216676",
            "extra": "mean: 14.6674120292 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.6105707740286432,
            "unit": "iter/sec",
            "range": "stddev: 0.05431015427020895",
            "extra": "mean: 1.637811769799987 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.053972000530175514,
            "unit": "iter/sec",
            "range": "stddev: 0.12541624161857862",
            "extra": "mean: 18.5281255128 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.06893680677004156,
            "unit": "iter/sec",
            "range": "stddev: 0.15011195099545047",
            "extra": "mean: 14.506038890599996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.5962450174978892,
            "unit": "iter/sec",
            "range": "stddev: 0.04538094957040949",
            "extra": "mean: 1.677162862 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "f958472164069d30246ba596041ae65fc5721d1b",
          "message": "The rework of the actions system",
          "timestamp": "2021-03-17T09:45:15Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/324/commits/f958472164069d30246ba596041ae65fc5721d1b"
        },
        "date": 1615981109311,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.07221364801103136,
            "unit": "iter/sec",
            "range": "stddev: 0.1541221531577032",
            "extra": "mean: 13.847797854600007 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.07871424126882913,
            "unit": "iter/sec",
            "range": "stddev: 0.2068385808014812",
            "extra": "mean: 12.704181402 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.625532891391991,
            "unit": "iter/sec",
            "range": "stddev: 0.06999034163593264",
            "extra": "mean: 1.5986369601999855 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.07267169668519552,
            "unit": "iter/sec",
            "range": "stddev: 0.24204505585550473",
            "extra": "mean: 13.760515381000005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.07840100170057156,
            "unit": "iter/sec",
            "range": "stddev: 0.20192373647695366",
            "extra": "mean: 12.754939073599996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.6226861121065052,
            "unit": "iter/sec",
            "range": "stddev: 0.05799526776597753",
            "extra": "mean: 1.6059455648000038 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "388df98b3a3811045b1100e914115ac9619fd9aa",
          "message": "The rework of the actions system",
          "timestamp": "2021-03-17T09:45:15Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/324/commits/388df98b3a3811045b1100e914115ac9619fd9aa"
        },
        "date": 1615981280418,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.055587526615254394,
            "unit": "iter/sec",
            "range": "stddev: 0.08993823985871813",
            "extra": "mean: 17.989647334399997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.0755359672541634,
            "unit": "iter/sec",
            "range": "stddev: 0.031804319774940464",
            "extra": "mean: 13.238726349199982 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 0.6642742470066967,
            "unit": "iter/sec",
            "range": "stddev: 0.035600734121391885",
            "extra": "mean: 1.5054023311999913 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.05574791518137926,
            "unit": "iter/sec",
            "range": "stddev: 0.04721649382368098",
            "extra": "mean: 17.937890533600022 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.07549262560798362,
            "unit": "iter/sec",
            "range": "stddev: 0.04270019997640571",
            "extra": "mean: 13.246326935199965 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 0.670553159519809,
            "unit": "iter/sec",
            "range": "stddev: 0.038352627562835015",
            "extra": "mean: 1.4913060743999949 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "ccc12d4226ff7475abb031d9f1b0f06a31966f26",
          "message": "The rework of the actions system",
          "timestamp": "2021-03-17T09:45:15Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/324/commits/ccc12d4226ff7475abb031d9f1b0f06a31966f26"
        },
        "date": 1616679576301,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.05331172262276957,
            "unit": "iter/sec",
            "range": "stddev: 0.10039975406902546",
            "extra": "mean: 18.757600595200003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.07239084026259104,
            "unit": "iter/sec",
            "range": "stddev: 0.1036986677560182",
            "extra": "mean: 13.81390237179998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 65.27694300535217,
            "unit": "iter/sec",
            "range": "stddev: 0.000821869987079031",
            "extra": "mean: 15.319344839999758 msec\nrounds: 50"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.05323173476739994,
            "unit": "iter/sec",
            "range": "stddev: 0.03294438674725716",
            "extra": "mean: 18.785786417999997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.07261043990703718,
            "unit": "iter/sec",
            "range": "stddev: 0.05535628962876063",
            "extra": "mean: 13.772124246600015 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 32.32582452784367,
            "unit": "iter/sec",
            "range": "stddev: 0.0007923052132686848",
            "extra": "mean: 30.935019124992635 msec\nrounds: 32"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "353608e36b0e7eeb80e8ce3629f83e45971171ff",
          "message": "The rework of the actions system",
          "timestamp": "2021-03-17T09:45:15Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/324/commits/353608e36b0e7eeb80e8ce3629f83e45971171ff"
        },
        "date": 1616681049019,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.06853192902447156,
            "unit": "iter/sec",
            "range": "stddev: 0.0464014261830099",
            "extra": "mean: 14.591738686399992 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.07532552233575678,
            "unit": "iter/sec",
            "range": "stddev: 0.04448945957245006",
            "extra": "mean: 13.2757127862 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 64.24353399331018,
            "unit": "iter/sec",
            "range": "stddev: 0.0003105623263663263",
            "extra": "mean: 15.56576884615551 msec\nrounds: 52"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.06880635233909177,
            "unit": "iter/sec",
            "range": "stddev: 0.06507843091418795",
            "extra": "mean: 14.533541831600019 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.07533293394602086,
            "unit": "iter/sec",
            "range": "stddev: 0.14677128725981828",
            "extra": "mean: 13.2744066588 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 33.39510226378271,
            "unit": "iter/sec",
            "range": "stddev: 0.00027869970811568207",
            "extra": "mean: 29.944510787874098 msec\nrounds: 33"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "c3bff38960646dbce895735719caa6030696e110",
          "message": "The rework of the actions system",
          "timestamp": "2021-03-17T09:45:15Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/324/commits/c3bff38960646dbce895735719caa6030696e110"
        },
        "date": 1616681745381,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.07720052724828247,
            "unit": "iter/sec",
            "range": "stddev: 0.0649019915650427",
            "extra": "mean: 12.953279409399988 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.08552467430978564,
            "unit": "iter/sec",
            "range": "stddev: 0.16879304644801743",
            "extra": "mean: 11.692532103400026 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 73.07926077004807,
            "unit": "iter/sec",
            "range": "stddev: 0.0005424413609719867",
            "extra": "mean: 13.683772789473199 msec\nrounds: 57"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.07750826331182084,
            "unit": "iter/sec",
            "range": "stddev: 0.063755024916422",
            "extra": "mean: 12.901850167599992 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.0852560056055249,
            "unit": "iter/sec",
            "range": "stddev: 0.11322704572237376",
            "extra": "mean: 11.729378979199987 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 37.11522806805369,
            "unit": "iter/sec",
            "range": "stddev: 0.001101300210972915",
            "extra": "mean: 26.943118823530366 msec\nrounds: 34"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5d503eb182602c20da81b281b15e65577f0d48c9",
          "message": "Merge pull request #324 from UCL-CCS/actions-rework\n\nThe rework of the actions system",
          "timestamp": "2021-03-26T13:21:34+01:00",
          "tree_id": "c113d26a1ca9db094c49393a5d582638a1b03047",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/5d503eb182602c20da81b281b15e65577f0d48c9"
        },
        "date": 1616761714330,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.07670923579020951,
            "unit": "iter/sec",
            "range": "stddev: 0.3561066538107395",
            "extra": "mean: 13.036239895999994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.0842368012701512,
            "unit": "iter/sec",
            "range": "stddev: 0.2143674565234333",
            "extra": "mean: 11.871295976600004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 73.13368383710932,
            "unit": "iter/sec",
            "range": "stddev: 0.0007933685599161141",
            "extra": "mean: 13.67358989090855 msec\nrounds: 55"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.07767942296000492,
            "unit": "iter/sec",
            "range": "stddev: 0.18408049993266146",
            "extra": "mean: 12.873422096799993 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.08495139489061485,
            "unit": "iter/sec",
            "range": "stddev: 0.21610459689437012",
            "extra": "mean: 11.77143708220001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 38.22741164922884,
            "unit": "iter/sec",
            "range": "stddev: 0.0012739256296989039",
            "extra": "mean: 26.15923906059627 msec\nrounds: 33"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "94f685b1d8f204c96978d28577f22822d96f8163",
          "message": "Merge pull request #327 from UCL-CCS/actions-rework\n\nadded execute_local helper function",
          "timestamp": "2021-03-29T11:31:29+02:00",
          "tree_id": "f38089571bdf36ef72fb44c016bc50e17db0fd58",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/94f685b1d8f204c96978d28577f22822d96f8163"
        },
        "date": 1617010760625,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.06675200881712055,
            "unit": "iter/sec",
            "range": "stddev: 0.11797821095968264",
            "extra": "mean: 14.980822565799997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.07471017277745298,
            "unit": "iter/sec",
            "range": "stddev: 0.08382747108342292",
            "extra": "mean: 13.385058056000014 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 62.90841150682192,
            "unit": "iter/sec",
            "range": "stddev: 0.0007504257288226671",
            "extra": "mean: 15.896125431359174 msec\nrounds: 51"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.06705854789012615,
            "unit": "iter/sec",
            "range": "stddev: 0.05353244159494118",
            "extra": "mean: 14.912341997600015 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.07836959614930679,
            "unit": "iter/sec",
            "range": "stddev: 0.12316738982717818",
            "extra": "mean: 12.760050442200031 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 32.64325542150838,
            "unit": "iter/sec",
            "range": "stddev: 0.0013668166675925549",
            "extra": "mean: 30.634199533331717 msec\nrounds: 30"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "f1771c490aa98a980719179e512061fa04f4f6d2",
          "message": "added execute_local helper function",
          "timestamp": "2021-03-26T12:21:43Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/327/commits/f1771c490aa98a980719179e512061fa04f4f6d2"
        },
        "date": 1617010769693,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.06845240696930734,
            "unit": "iter/sec",
            "range": "stddev: 0.02550024705725329",
            "extra": "mean: 14.608690099799992 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.07578656135452924,
            "unit": "iter/sec",
            "range": "stddev: 0.09493402704748266",
            "extra": "mean: 13.194951481199997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 61.46136727383862,
            "unit": "iter/sec",
            "range": "stddev: 0.00017646971350112497",
            "extra": "mean: 16.270383240004094 msec\nrounds: 50"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.06817110876556888,
            "unit": "iter/sec",
            "range": "stddev: 0.06645578141683381",
            "extra": "mean: 14.668970742999988 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.0758039341324376,
            "unit": "iter/sec",
            "range": "stddev: 0.0366028712005991",
            "extra": "mean: 13.191927456599979 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 32.98563668487766,
            "unit": "iter/sec",
            "range": "stddev: 0.00017073371784697352",
            "extra": "mean: 30.316225500005345 msec\nrounds: 32"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f8628e566168f127dff7d41bac79e24fa0c2764e",
          "message": "Merge pull request #328 from UCL-CCS/actions-rework\n\nchanges",
          "timestamp": "2021-03-29T14:59:40+02:00",
          "tree_id": "901553a102d7c0049765b3c96b1fd22017f02069",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/f8628e566168f127dff7d41bac79e24fa0c2764e"
        },
        "date": 1617023245919,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.06821095217024518,
            "unit": "iter/sec",
            "range": "stddev: 0.2359717878974059",
            "extra": "mean: 14.660402298800008 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.07733200978769587,
            "unit": "iter/sec",
            "range": "stddev: 0.04094118426895874",
            "extra": "mean: 12.931255798799992 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 65.46228649682428,
            "unit": "iter/sec",
            "range": "stddev: 0.00024194874408321697",
            "extra": "mean: 15.275971150939132 msec\nrounds: 53"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.06896186610436518,
            "unit": "iter/sec",
            "range": "stddev: 0.061598171884455",
            "extra": "mean: 14.500767692199986 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.0771093915330259,
            "unit": "iter/sec",
            "range": "stddev: 0.047251110127068625",
            "extra": "mean: 12.96858891139999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 33.68960980049931,
            "unit": "iter/sec",
            "range": "stddev: 0.00037498723298561715",
            "extra": "mean: 29.68274212499722 msec\nrounds: 32"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "43eb2b3a04b2b7f88c8a2db3bf4c37c0c1c40792",
          "message": "changes",
          "timestamp": "2021-03-29T09:31:32Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/328/commits/43eb2b3a04b2b7f88c8a2db3bf4c37c0c1c40792"
        },
        "date": 1617023302473,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.05593658858941514,
            "unit": "iter/sec",
            "range": "stddev: 0.16666986847960483",
            "extra": "mean: 17.877386254999998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.07681913610314574,
            "unit": "iter/sec",
            "range": "stddev: 0.08299059764407123",
            "extra": "mean: 13.017589766400016 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 67.058471687528,
            "unit": "iter/sec",
            "range": "stddev: 0.00043664424125165806",
            "extra": "mean: 14.912358943396363 msec\nrounds: 53"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.05274597617944588,
            "unit": "iter/sec",
            "range": "stddev: 0.15695094869421103",
            "extra": "mean: 18.95879216640001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.07339687369672512,
            "unit": "iter/sec",
            "range": "stddev: 0.08762269778580303",
            "extra": "mean: 13.624558508200039 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 33.28325423955464,
            "unit": "iter/sec",
            "range": "stddev: 0.0014925155657285834",
            "extra": "mean: 30.045139000007264 msec\nrounds: 30"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "distinct": true,
          "id": "d849b676f06983e8a58ab78367fa88f4b5e270d4",
          "message": "added test_actions_action_statuses.py",
          "timestamp": "2021-03-29T15:02:14+02:00",
          "tree_id": "ecc55cdcb29c43c13270834bea371ff305c578b7",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/d849b676f06983e8a58ab78367fa88f4b5e270d4"
        },
        "date": 1617023419084,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.06819509805814546,
            "unit": "iter/sec",
            "range": "stddev: 0.04564495646959287",
            "extra": "mean: 14.663810573999996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.07285194719235645,
            "unit": "iter/sec",
            "range": "stddev: 0.028467836451127163",
            "extra": "mean: 13.726469072400016 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 63.47502738372173,
            "unit": "iter/sec",
            "range": "stddev: 0.00025643452881776594",
            "extra": "mean: 15.75422715384998 msec\nrounds: 52"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.06844899395575808,
            "unit": "iter/sec",
            "range": "stddev: 0.06055156429902301",
            "extra": "mean: 14.609418520400004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.07252915775673562,
            "unit": "iter/sec",
            "range": "stddev: 0.03604970731371063",
            "extra": "mean: 13.78755842380001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 32.88866748328362,
            "unit": "iter/sec",
            "range": "stddev: 0.0002886797726084754",
            "extra": "mean: 30.40561009375864 msec\nrounds: 32"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "distinct": true,
          "id": "0ab92a821f317297259410d410e7397c0a91ee4e",
          "message": "remove unused imports in sampling/base",
          "timestamp": "2021-03-29T15:52:19+02:00",
          "tree_id": "d5821df3a576e4daa8723f34dcb5382b1fdca16f",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/0ab92a821f317297259410d410e7397c0a91ee4e"
        },
        "date": 1617026494002,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.053119485286262105,
            "unit": "iter/sec",
            "range": "stddev: 0.33582190733591005",
            "extra": "mean: 18.825483617000003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.06630930931251897,
            "unit": "iter/sec",
            "range": "stddev: 0.18126655205115288",
            "extra": "mean: 15.0808387294 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 61.382900001696086,
            "unit": "iter/sec",
            "range": "stddev: 0.001208717751717687",
            "extra": "mean: 16.29118207142981 msec\nrounds: 42"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.05362229613355603,
            "unit": "iter/sec",
            "range": "stddev: 0.17249809714070943",
            "extra": "mean: 18.6489589612 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.06957924439369154,
            "unit": "iter/sec",
            "range": "stddev: 0.36621800387565495",
            "extra": "mean: 14.372102035800003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 31.365946733821556,
            "unit": "iter/sec",
            "range": "stddev: 0.00220052266186674",
            "extra": "mean: 31.881709437506345 msec\nrounds: 32"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "distinct": true,
          "id": "2977ce3f40a8366e26c0b14a75c3ded2d574e620",
          "message": "fix db_benchmark.py script",
          "timestamp": "2021-03-29T17:34:52+02:00",
          "tree_id": "de3d441bc09ea180901d4f074709f14568dd97a8",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/2977ce3f40a8366e26c0b14a75c3ded2d574e620"
        },
        "date": 1617032605166,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.05790646631319982,
            "unit": "iter/sec",
            "range": "stddev: 0.3354031275249731",
            "extra": "mean: 17.269228527800003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.07449667074111024,
            "unit": "iter/sec",
            "range": "stddev: 0.21281720569464377",
            "extra": "mean: 13.423418658199983 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 73.04276114608732,
            "unit": "iter/sec",
            "range": "stddev: 0.0010762193755245722",
            "extra": "mean: 13.690610600001492 msec\nrounds: 50"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.057468890300874674,
            "unit": "iter/sec",
            "range": "stddev: 0.21042227034548802",
            "extra": "mean: 17.400718802200014 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.07432715963055418,
            "unit": "iter/sec",
            "range": "stddev: 0.1676172538036183",
            "extra": "mean: 13.454032213400001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 33.25145550350215,
            "unit": "iter/sec",
            "range": "stddev: 0.0035634465236146972",
            "extra": "mean: 30.073871499991235 msec\nrounds: 34"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "distinct": true,
          "id": "bc90de85c6975efbca13e691ebc5c06cf60a9ef1",
          "message": "exclude db_benchmark from coveralls report",
          "timestamp": "2021-03-29T17:38:02+02:00",
          "tree_id": "3ff7ba750ba6c4047a0fe80d4b949e53a4444af6",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/bc90de85c6975efbca13e691ebc5c06cf60a9ef1"
        },
        "date": 1617032822797,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.05577924911919902,
            "unit": "iter/sec",
            "range": "stddev: 0.13683843688128428",
            "extra": "mean: 17.9278139414 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.0710897782629626,
            "unit": "iter/sec",
            "range": "stddev: 0.11528046914411332",
            "extra": "mean: 14.066719920000015 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 67.75991712724549,
            "unit": "iter/sec",
            "range": "stddev: 0.001154312957147611",
            "extra": "mean: 14.757987352937768 msec\nrounds: 51"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.055417497635118294,
            "unit": "iter/sec",
            "range": "stddev: 0.14533889766874444",
            "extra": "mean: 18.044842200999994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.0717280042182316,
            "unit": "iter/sec",
            "range": "stddev: 0.068905855032869",
            "extra": "mean: 13.941556173199967 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 34.35622842938644,
            "unit": "iter/sec",
            "range": "stddev: 0.0013685096447359102",
            "extra": "mean: 29.106803794116544 msec\nrounds: 34"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "distinct": true,
          "id": "aa55256c78ba65a51881b1bb005da4ae2bd7edd5",
          "message": "rework execute signature, get rid of unused import",
          "timestamp": "2021-03-30T15:12:22+02:00",
          "tree_id": "4cc1a738a7735438a4e933fb01f72003739193b5",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/aa55256c78ba65a51881b1bb005da4ae2bd7edd5"
        },
        "date": 1617110422644,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.06856129729344462,
            "unit": "iter/sec",
            "range": "stddev: 0.03742931399330716",
            "extra": "mean: 14.585488307200006 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.07579353835948875,
            "unit": "iter/sec",
            "range": "stddev: 0.05188550996247394",
            "extra": "mean: 13.193736849400011 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 61.145054662541824,
            "unit": "iter/sec",
            "range": "stddev: 0.00033356158719787313",
            "extra": "mean: 16.35455239215955 msec\nrounds: 51"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.06855281965829489,
            "unit": "iter/sec",
            "range": "stddev: 0.07191905455479114",
            "extra": "mean: 14.587292032400011 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.07582502971319954,
            "unit": "iter/sec",
            "range": "stddev: 0.05028217941684767",
            "extra": "mean: 13.188257278399998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 32.399469715454366,
            "unit": "iter/sec",
            "range": "stddev: 0.0003776377508208026",
            "extra": "mean: 30.864702687495083 msec\nrounds: 32"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "distinct": true,
          "id": "abae9b926200ee1757994458d6a1e6b9c1a8ed96",
          "message": "remove unused import in sql.py",
          "timestamp": "2021-03-30T15:15:19+02:00",
          "tree_id": "fe55341b58c66f760174cec77776a1a4ddb5f383",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/abae9b926200ee1757994458d6a1e6b9c1a8ed96"
        },
        "date": 1617110611225,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.06590406845020307,
            "unit": "iter/sec",
            "range": "stddev: 0.07442547192209273",
            "extra": "mean: 15.173570062 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.07228640527319304,
            "unit": "iter/sec",
            "range": "stddev: 0.04672000811435757",
            "extra": "mean: 13.833859855399998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 62.75772644918261,
            "unit": "iter/sec",
            "range": "stddev: 0.00023558971039755737",
            "extra": "mean: 15.934292980000466 msec\nrounds: 50"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.0661002872499229,
            "unit": "iter/sec",
            "range": "stddev: 0.04540948628996172",
            "extra": "mean: 15.128527297000005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.07211403114527136,
            "unit": "iter/sec",
            "range": "stddev: 0.036262336091573144",
            "extra": "mean: 13.866926922799985 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 32.37954975655371,
            "unit": "iter/sec",
            "range": "stddev: 0.0002775430526990806",
            "extra": "mean: 30.883690709676937 msec\nrounds: 31"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "distinct": true,
          "id": "1f4c564036a2903ed319a36cc9b25b28a4a89dff",
          "message": "remove unused import in encoders/base.py",
          "timestamp": "2021-03-30T15:15:56+02:00",
          "tree_id": "3b19f9259e950ccfba1ff122e0b760140a7a7992",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/1f4c564036a2903ed319a36cc9b25b28a4a89dff"
        },
        "date": 1617110619974,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.07042141506344331,
            "unit": "iter/sec",
            "range": "stddev: 0.30872080096373977",
            "extra": "mean: 14.200225870200006 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.07710382019787139,
            "unit": "iter/sec",
            "range": "stddev: 0.15727542026186697",
            "extra": "mean: 12.969525990199992 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 63.81403820607636,
            "unit": "iter/sec",
            "range": "stddev: 0.0005217027586967048",
            "extra": "mean: 15.670533132077828 msec\nrounds: 53"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.0686791259011681,
            "unit": "iter/sec",
            "range": "stddev: 0.14420587931758425",
            "extra": "mean: 14.560464870199985 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.07642029607935155,
            "unit": "iter/sec",
            "range": "stddev: 0.044961701082209767",
            "extra": "mean: 13.085528993000015 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 32.44537510082251,
            "unit": "iter/sec",
            "range": "stddev: 0.0001936497740657954",
            "extra": "mean: 30.821033718751778 msec\nrounds: 32"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "distinct": true,
          "id": "19a8582098d415b94ae843a1341154dc81949238",
          "message": "remove unused import in pce_analysis",
          "timestamp": "2021-03-30T15:17:02+02:00",
          "tree_id": "2ae6b7c16478605578b2f8a4987a6d6454b21200",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/19a8582098d415b94ae843a1341154dc81949238"
        },
        "date": 1617110686220,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.06996720462956646,
            "unit": "iter/sec",
            "range": "stddev: 0.07729083896542621",
            "extra": "mean: 14.292410355600001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.07663748317412844,
            "unit": "iter/sec",
            "range": "stddev: 0.119445184776352",
            "extra": "mean: 13.04844520700001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 63.48886345559144,
            "unit": "iter/sec",
            "range": "stddev: 0.0002695841731349491",
            "extra": "mean: 15.750793849057795 msec\nrounds: 53"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.0689900967171107,
            "unit": "iter/sec",
            "range": "stddev: 0.09848162180280308",
            "extra": "mean: 14.49483400639998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.07617005229215532,
            "unit": "iter/sec",
            "range": "stddev: 0.22918428676224556",
            "extra": "mean: 13.128519279000011 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 33.48264747488181,
            "unit": "iter/sec",
            "range": "stddev: 0.0005122707153257805",
            "extra": "mean: 29.86621654545643 msec\nrounds: 33"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "distinct": true,
          "id": "6682c01593aca6f878c4b6ee8e920994b9714929",
          "message": "fix executor",
          "timestamp": "2021-03-30T15:59:49+02:00",
          "tree_id": "16e3f1f5f4b12b7f2fc1bef184a3d641e4a7c24d",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/6682c01593aca6f878c4b6ee8e920994b9714929"
        },
        "date": 1617113232549,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.07346844242843684,
            "unit": "iter/sec",
            "range": "stddev: 0.21460929318660668",
            "extra": "mean: 13.6112862468 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.08089200620765169,
            "unit": "iter/sec",
            "range": "stddev: 0.06232134803397554",
            "extra": "mean: 12.362160946200003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 70.30414120812932,
            "unit": "iter/sec",
            "range": "stddev: 0.000586916096161487",
            "extra": "mean: 14.22391316949007 msec\nrounds: 59"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.07406154288076838,
            "unit": "iter/sec",
            "range": "stddev: 0.12560250917570412",
            "extra": "mean: 13.502284196400002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.08013943315210266,
            "unit": "iter/sec",
            "range": "stddev: 0.0884959562701723",
            "extra": "mean: 12.478251475799993 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 34.38696851219074,
            "unit": "iter/sec",
            "range": "stddev: 0.0009326025001089058",
            "extra": "mean: 29.080783891882874 msec\nrounds: 37"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "e868ffb8d1b59de1dc177cdd10b1b40ffad167fc",
          "message": "added encoder_decoder_tutorial",
          "timestamp": "2021-03-30T13:59:55Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/316/commits/e868ffb8d1b59de1dc177cdd10b1b40ffad167fc"
        },
        "date": 1617279197306,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.07257358921526563,
            "unit": "iter/sec",
            "range": "stddev: 0.1902528750220166",
            "extra": "mean: 13.779117318200008 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.09090608140872243,
            "unit": "iter/sec",
            "range": "stddev: 0.125596392757675",
            "extra": "mean: 11.000364161599975 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 66.16756728674979,
            "unit": "iter/sec",
            "range": "stddev: 0.0005502976626647638",
            "extra": "mean: 15.113144415092505 msec\nrounds: 53"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.08232137616086575,
            "unit": "iter/sec",
            "range": "stddev: 0.1313728930328539",
            "extra": "mean: 12.147513156800017 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.09159457825619098,
            "unit": "iter/sec",
            "range": "stddev: 0.4636292678736904",
            "extra": "mean: 10.917676777799988 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 35.74869182387765,
            "unit": "iter/sec",
            "range": "stddev: 0.000834901092513317",
            "extra": "mean: 27.973051571416363 msec\nrounds: 35"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d100205235719a1e5b457d200070a0be0e2d2491",
          "message": "Merge pull request #316 from UCL-CCS/encoder-decoder-tutorial\n\nadded encoder_decoder_tutorial",
          "timestamp": "2021-04-01T14:13:06+02:00",
          "tree_id": "5c4b6116a2d7caef96437df88e089c4f0cae3a0f",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/d100205235719a1e5b457d200070a0be0e2d2491"
        },
        "date": 1617279721268,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.053984534871649725,
            "unit": "iter/sec",
            "range": "stddev: 0.052288933871241096",
            "extra": "mean: 18.523823579799988 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.07475068775148416,
            "unit": "iter/sec",
            "range": "stddev: 0.1101044387693359",
            "extra": "mean: 13.377803336400007 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 64.1050049433525,
            "unit": "iter/sec",
            "range": "stddev: 0.0008679953035881184",
            "extra": "mean: 15.599406019602798 msec\nrounds: 51"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.054899401921812245,
            "unit": "iter/sec",
            "range": "stddev: 0.10529570449056794",
            "extra": "mean: 18.215134682600013 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.07404388231468015,
            "unit": "iter/sec",
            "range": "stddev: 0.02989722935930766",
            "extra": "mean: 13.505504691800002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 33.26233169868986,
            "unit": "iter/sec",
            "range": "stddev: 0.0008671785768228042",
            "extra": "mean: 30.064037874993232 msec\nrounds: 32"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "a6598d5ed9f980ae33cc5a7b1b8623679ae3df2b",
          "message": "Actions tweak",
          "timestamp": "2021-04-01T12:13:09Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/329/commits/a6598d5ed9f980ae33cc5a7b1b8623679ae3df2b"
        },
        "date": 1617283998854,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.06834379657084694,
            "unit": "iter/sec",
            "range": "stddev: 0.0750980228639547",
            "extra": "mean: 14.631905896000001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.07644064179280938,
            "unit": "iter/sec",
            "range": "stddev: 0.06037825053593152",
            "extra": "mean: 13.082046101999998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 59.51277370695788,
            "unit": "iter/sec",
            "range": "stddev: 0.0003870364177241609",
            "extra": "mean: 16.803115326535114 msec\nrounds: 49"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.06833099692250946,
            "unit": "iter/sec",
            "range": "stddev: 0.0490686997544281",
            "extra": "mean: 14.63464672020001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.07646571957647753,
            "unit": "iter/sec",
            "range": "stddev: 0.04283859975875293",
            "extra": "mean: 13.077755699399983 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 32.1582202121408,
            "unit": "iter/sec",
            "range": "stddev: 0.00027078393999341245",
            "extra": "mean: 31.0962482812549 msec\nrounds: 32"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bdd866c5d5d1f61140b776ec9ac47791b928a7cf",
          "message": "Merge pull request #329 from UCL-CCS/actions-tweak\n\nActions tweak",
          "timestamp": "2021-04-01T15:25:33+02:00",
          "tree_id": "f6f17602465463b3451a2ef9398c91c2b934c9c6",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/bdd866c5d5d1f61140b776ec9ac47791b928a7cf"
        },
        "date": 1617284009040,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.06182656309236346,
            "unit": "iter/sec",
            "range": "stddev: 0.8356442572662944",
            "extra": "mean: 16.174277688800004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.0818413550974361,
            "unit": "iter/sec",
            "range": "stddev: 0.7756316749796424",
            "extra": "mean: 12.218761514999983 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 81.51482957932147,
            "unit": "iter/sec",
            "range": "stddev: 0.0011776221564100057",
            "extra": "mean: 12.267706442628423 msec\nrounds: 61"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.0611874285275032,
            "unit": "iter/sec",
            "range": "stddev: 0.7781592133052961",
            "extra": "mean: 16.343226444799996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.07885862726921332,
            "unit": "iter/sec",
            "range": "stddev: 0.9090120219616384",
            "extra": "mean: 12.680920713799992 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 30.486232894201496,
            "unit": "iter/sec",
            "range": "stddev: 0.003906173722327369",
            "extra": "mean: 32.801691290307005 msec\nrounds: 31"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dc53dc7c756e190ebb8d582e36a88a09b152c87b",
          "message": "Update README.md",
          "timestamp": "2021-04-01T17:50:08+02:00",
          "tree_id": "2485739b63c08ad4f1a0b3f75612e68ec8e0397e",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/dc53dc7c756e190ebb8d582e36a88a09b152c87b"
        },
        "date": 1617292750786,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.052725264991093666,
            "unit": "iter/sec",
            "range": "stddev: 0.13234586539195126",
            "extra": "mean: 18.966239433199995 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.07254604608478787,
            "unit": "iter/sec",
            "range": "stddev: 0.08291723601575479",
            "extra": "mean: 13.7843487546 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 65.57886818953824,
            "unit": "iter/sec",
            "range": "stddev: 0.0013924648115793837",
            "extra": "mean: 15.248814558826579 msec\nrounds: 34"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.05271638513235251,
            "unit": "iter/sec",
            "range": "stddev: 0.1372825054008541",
            "extra": "mean: 18.96943421839999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.07265455358669395,
            "unit": "iter/sec",
            "range": "stddev: 0.12363000133020251",
            "extra": "mean: 13.763762223200024 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 31.892436634090124,
            "unit": "iter/sec",
            "range": "stddev: 0.002171674239875388",
            "extra": "mean: 31.3553966250133 msec\nrounds: 32"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "distinct": true,
          "id": "5e3360c669247008758f9630d51d218fdd9cdc4c",
          "message": "fix a bug with pool passing",
          "timestamp": "2021-04-08T12:33:59+02:00",
          "tree_id": "fa798e6c676da182f44bbe8bb8297a83dce0546b",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/5e3360c669247008758f9630d51d218fdd9cdc4c"
        },
        "date": 1617878516851,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.06846713796051664,
            "unit": "iter/sec",
            "range": "stddev: 0.12744917166727726",
            "extra": "mean: 14.605546979000001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.07271235201620417,
            "unit": "iter/sec",
            "range": "stddev: 0.024843678987030642",
            "extra": "mean: 13.752821525800005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 65.0160802645763,
            "unit": "iter/sec",
            "range": "stddev: 0.0003992079094584567",
            "extra": "mean: 15.380810346157476 msec\nrounds: 52"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.06840260894286246,
            "unit": "iter/sec",
            "range": "stddev: 0.1462334674972688",
            "extra": "mean: 14.619325424200008 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.07318925399637154,
            "unit": "iter/sec",
            "range": "stddev: 0.20177714093721735",
            "extra": "mean: 13.663207990199988 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 33.49954185163327,
            "unit": "iter/sec",
            "range": "stddev: 0.0006673594223142368",
            "extra": "mean: 29.85115451515481 msec\nrounds: 33"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "distinct": true,
          "id": "af500d96821f7fd9c10d5dac438fc8f99e49adb9",
          "message": "patch up some things wrt dask support",
          "timestamp": "2021-04-08T12:53:41+02:00",
          "tree_id": "a1fee9d4bfb02bd1b566c4f416d9d9b4e8460e85",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/af500d96821f7fd9c10d5dac438fc8f99e49adb9"
        },
        "date": 1617879769148,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.05173347812151542,
            "unit": "iter/sec",
            "range": "stddev: 0.19934200005949698",
            "extra": "mean: 19.329842807999995 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.06954797119940034,
            "unit": "iter/sec",
            "range": "stddev: 0.07638588492845876",
            "extra": "mean: 14.37856464759999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 62.021233291727015,
            "unit": "iter/sec",
            "range": "stddev: 0.001760615035371246",
            "extra": "mean: 16.123510400000214 msec\nrounds: 50"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.05093358734613644,
            "unit": "iter/sec",
            "range": "stddev: 0.5183500556277003",
            "extra": "mean: 19.633409938400007 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.07377868158030731,
            "unit": "iter/sec",
            "range": "stddev: 0.8349111734438777",
            "extra": "mean: 13.554050825800005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 31.645063023858217,
            "unit": "iter/sec",
            "range": "stddev: 0.0026710840293377265",
            "extra": "mean: 31.60050587499441 msec\nrounds: 32"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "distinct": true,
          "id": "bfae1d6722d296650adb9b694b3a08d6cb2f7e88",
          "message": "removed dask campaign",
          "timestamp": "2021-04-09T11:24:24+02:00",
          "tree_id": "3f206760c5bc087b58004a4539b9a31476394ef2",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/bfae1d6722d296650adb9b694b3a08d6cb2f7e88"
        },
        "date": 1617960675842,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.07660907951985474,
            "unit": "iter/sec",
            "range": "stddev: 0.11461523763110487",
            "extra": "mean: 13.053283060799998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.08648791863217054,
            "unit": "iter/sec",
            "range": "stddev: 0.03927473384630309",
            "extra": "mean: 11.562308537600007 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 68.94625715845517,
            "unit": "iter/sec",
            "range": "stddev: 0.0006016346688627022",
            "extra": "mean: 14.504050563640579 msec\nrounds: 55"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.07686426451016336,
            "unit": "iter/sec",
            "range": "stddev: 0.1249415499086057",
            "extra": "mean: 13.009946902800005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.08666897072115441,
            "unit": "iter/sec",
            "range": "stddev: 0.05944052951342174",
            "extra": "mean: 11.538154793800004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 36.50340180525069,
            "unit": "iter/sec",
            "range": "stddev: 0.0010450422032843455",
            "extra": "mean: 27.394707083331582 msec\nrounds: 36"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "distinct": true,
          "id": "fdc31fe1f8e1726899bb27f9aa1990eebf36fa98",
          "message": "remove some obsolete stuff from base_element",
          "timestamp": "2021-04-09T13:38:39+02:00",
          "tree_id": "6f5abe7ed40495e79b36a98e7927fd8eaff725de",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/fdc31fe1f8e1726899bb27f9aa1990eebf36fa98"
        },
        "date": 1617968781629,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.06903403840734758,
            "unit": "iter/sec",
            "range": "stddev: 0.06661540627919145",
            "extra": "mean: 14.485607724399994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.07648040940417385,
            "unit": "iter/sec",
            "range": "stddev: 0.04321080697994364",
            "extra": "mean: 13.075243814600004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 65.26692704654303,
            "unit": "iter/sec",
            "range": "stddev: 0.0003008745710949462",
            "extra": "mean: 15.321695769235188 msec\nrounds: 52"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.0686460801345058,
            "unit": "iter/sec",
            "range": "stddev: 0.1278704431803201",
            "extra": "mean: 14.567474181200009 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.0756707893866925,
            "unit": "iter/sec",
            "range": "stddev: 0.04072267900041835",
            "extra": "mean: 13.215139000199997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 33.31408348423375,
            "unit": "iter/sec",
            "range": "stddev: 0.00028855350116291356",
            "extra": "mean: 30.017334875001467 msec\nrounds: 32"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "distinct": true,
          "id": "02cde69dd62cbfc3ef4ec38fa7d64af28b322de8",
          "message": "removed unused method in analysis results",
          "timestamp": "2021-04-13T12:10:00+02:00",
          "tree_id": "d8738355561d098e1ad0d69af6560531a1d13367",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/02cde69dd62cbfc3ef4ec38fa7d64af28b322de8"
        },
        "date": 1618308962861,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.08753494475461095,
            "unit": "iter/sec",
            "range": "stddev: 0.32861182711392084",
            "extra": "mean: 11.42400903780001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.09849740842605859,
            "unit": "iter/sec",
            "range": "stddev: 0.11302229421205803",
            "extra": "mean: 10.152551381599995 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 83.8469277072411,
            "unit": "iter/sec",
            "range": "stddev: 0.0006467720529785308",
            "extra": "mean: 11.926495428569401 msec\nrounds: 63"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.0874550011999363,
            "unit": "iter/sec",
            "range": "stddev: 0.2929562772525075",
            "extra": "mean: 11.434451847000014 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.10338566836117052,
            "unit": "iter/sec",
            "range": "stddev: 0.15211561251940175",
            "extra": "mean: 9.672520532600037 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 43.66370899472803,
            "unit": "iter/sec",
            "range": "stddev: 0.00068954580789001",
            "extra": "mean: 22.902314599997453 msec\nrounds: 40"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "distinct": true,
          "id": "d9d39b2a8793632b37f5374ce88695a891010ad5",
          "message": "cleanup vector qoi tutorial",
          "timestamp": "2021-04-13T12:11:25+02:00",
          "tree_id": "f4180d5def22ae1d63e3290caf2904e632f4fec7",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/d9d39b2a8793632b37f5374ce88695a891010ad5"
        },
        "date": 1618309120775,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.072604408142008,
            "unit": "iter/sec",
            "range": "stddev: 0.16053552581534916",
            "extra": "mean: 13.773268395000008 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.08243257498845362,
            "unit": "iter/sec",
            "range": "stddev: 0.06150610404169688",
            "extra": "mean: 12.131126561799999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 68.92059639542963,
            "unit": "iter/sec",
            "range": "stddev: 0.0004929306608648251",
            "extra": "mean: 14.509450763637233 msec\nrounds: 55"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.07273776471446422,
            "unit": "iter/sec",
            "range": "stddev: 0.11233792716082909",
            "extra": "mean: 13.748016644799998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.08242266763849172,
            "unit": "iter/sec",
            "range": "stddev: 0.068932700058189",
            "extra": "mean: 12.13258474459999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 34.57850987482623,
            "unit": "iter/sec",
            "range": "stddev: 0.0005609883331915758",
            "extra": "mean: 28.91969618181892 msec\nrounds: 33"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "distinct": true,
          "id": "b8f5d104aff8e89b8d6b85879cfa62e075e20bef",
          "message": "added supported_stats method",
          "timestamp": "2021-04-13T12:14:41+02:00",
          "tree_id": "8440724a02f7d31245568e011178956dc17a7832",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/b8f5d104aff8e89b8d6b85879cfa62e075e20bef"
        },
        "date": 1618309333045,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.0690672426238767,
            "unit": "iter/sec",
            "range": "stddev: 0.110960270266437",
            "extra": "mean: 14.478643739200004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.07807055903998679,
            "unit": "iter/sec",
            "range": "stddev: 0.04138513165230347",
            "extra": "mean: 12.808925826799987 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 64.64811907576156,
            "unit": "iter/sec",
            "range": "stddev: 0.0002742157969523452",
            "extra": "mean: 15.468354134605114 msec\nrounds: 52"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.06918681366878267,
            "unit": "iter/sec",
            "range": "stddev: 0.11780538229937546",
            "extra": "mean: 14.453621246200033 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.08226767573380227,
            "unit": "iter/sec",
            "range": "stddev: 0.0389269309735942",
            "extra": "mean: 12.155442475799987 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 33.49114305815223,
            "unit": "iter/sec",
            "range": "stddev: 0.00040871462994551455",
            "extra": "mean: 29.858640484848586 msec\nrounds: 33"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "committer": {
            "email": "unaudio@gmail.com",
            "name": "Vytautas Jancauskas",
            "username": "orbitfold"
          },
          "distinct": true,
          "id": "0a78fcc4e58c95ed14ba86c7aae1e5b49f5e0540",
          "message": "implemented supported_stats for all analysis methods",
          "timestamp": "2021-04-13T14:34:49+02:00",
          "tree_id": "b94bf8f77698094b69d5f7f9e1d5014c31e225ba",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/commit/0a78fcc4e58c95ed14ba86c7aae1e5b49f5e0540"
        },
        "date": 1618317816106,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.05445232707072753,
            "unit": "iter/sec",
            "range": "stddev: 0.24373313195564458",
            "extra": "mean: 18.364688045399987 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.07191621490696466,
            "unit": "iter/sec",
            "range": "stddev: 0.0939648642903691",
            "extra": "mean: 13.905069966399969 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 64.40537036092495,
            "unit": "iter/sec",
            "range": "stddev: 0.0018925267767969873",
            "extra": "mean: 15.526655531922923 msec\nrounds: 47"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.054714965340314975,
            "unit": "iter/sec",
            "range": "stddev: 0.16824523844783565",
            "extra": "mean: 18.276535382600013 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.07570995680673798,
            "unit": "iter/sec",
            "range": "stddev: 0.09645113496212585",
            "extra": "mean: 13.208302344599975 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 32.78740215138139,
            "unit": "iter/sec",
            "range": "stddev: 0.0018595596601174594",
            "extra": "mean: 30.49951915625826 msec\nrounds: 32"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "0ef4191991bc1619b1825d98d0ca7cfe635559b0",
          "message": "Get rid of save_state method",
          "timestamp": "2021-04-13T12:34:55Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/330/commits/0ef4191991bc1619b1825d98d0ca7cfe635559b0"
        },
        "date": 1618393441430,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.06792953942935347,
            "unit": "iter/sec",
            "range": "stddev: 0.32080297277006264",
            "extra": "mean: 14.72113617140003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.07784036915547855,
            "unit": "iter/sec",
            "range": "stddev: 0.14730850213513746",
            "extra": "mean: 12.846804438999992 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 63.896788544606906,
            "unit": "iter/sec",
            "range": "stddev: 0.00047764032210963144",
            "extra": "mean: 15.650238811327602 msec\nrounds: 53"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.07083869993215301,
            "unit": "iter/sec",
            "range": "stddev: 0.08233651428370325",
            "extra": "mean: 14.11657753400002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.08283593188397521,
            "unit": "iter/sec",
            "range": "stddev: 0.036210259708882496",
            "extra": "mean: 12.072055897199993 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 34.113946038005835,
            "unit": "iter/sec",
            "range": "stddev: 0.0007287285515548655",
            "extra": "mean: 29.31352470587586 msec\nrounds: 34"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "f54fb8baa4d57f17ce4a0d00c8852d9d2b830529",
          "message": "Get rid of save_state method",
          "timestamp": "2021-04-13T12:34:55Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/330/commits/f54fb8baa4d57f17ce4a0d00c8852d9d2b830529"
        },
        "date": 1618397138856,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.07057160153276575,
            "unit": "iter/sec",
            "range": "stddev: 0.1362736703392777",
            "extra": "mean: 14.17000575699999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.07473078849897498,
            "unit": "iter/sec",
            "range": "stddev: 0.021575367277521813",
            "extra": "mean: 13.381365566800037 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 63.301224151470606,
            "unit": "iter/sec",
            "range": "stddev: 0.00033653127437017436",
            "extra": "mean: 15.797482803920914 msec\nrounds: 51"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.07027583476648008,
            "unit": "iter/sec",
            "range": "stddev: 0.16527231367374096",
            "extra": "mean: 14.229642427199973 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.08026045503771796,
            "unit": "iter/sec",
            "range": "stddev: 0.1535768411412371",
            "extra": "mean: 12.459435964199997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 34.04599728543657,
            "unit": "iter/sec",
            "range": "stddev: 0.00042540197314176466",
            "extra": "mean: 29.372028424256424 msec\nrounds: 33"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "bde78bb5971f1c2ec56adab08c5d136788094fbd",
          "message": "Get rid of save_state method",
          "timestamp": "2021-04-13T12:34:55Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/330/commits/bde78bb5971f1c2ec56adab08c5d136788094fbd"
        },
        "date": 1618397146802,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.05440855023385223,
            "unit": "iter/sec",
            "range": "stddev: 0.1217672613241109",
            "extra": "mean: 18.37946417799999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.07561466849995907,
            "unit": "iter/sec",
            "range": "stddev: 0.0719100033915418",
            "extra": "mean: 13.224947220399986 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 69.42959331618839,
            "unit": "iter/sec",
            "range": "stddev: 0.0004991089622762553",
            "extra": "mean: 14.403080188672766 msec\nrounds: 53"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.05576209013854278,
            "unit": "iter/sec",
            "range": "stddev: 0.08045090721641088",
            "extra": "mean: 17.933330646599984 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.08086393570117759,
            "unit": "iter/sec",
            "range": "stddev: 0.027842444919649174",
            "extra": "mean: 12.366452254999967 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 34.751875807617004,
            "unit": "iter/sec",
            "range": "stddev: 0.0011621494392102868",
            "extra": "mean: 28.77542511765127 msec\nrounds: 34"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "68e0c4751266ac3b3ba028174946a473eacc1c2d",
          "message": "Get rid of save_state method",
          "timestamp": "2021-04-13T12:34:55Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/330/commits/68e0c4751266ac3b3ba028174946a473eacc1c2d"
        },
        "date": 1618397426306,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.06844069801148842,
            "unit": "iter/sec",
            "range": "stddev: 0.2642215996509627",
            "extra": "mean: 14.61118938080001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.07550455042460098,
            "unit": "iter/sec",
            "range": "stddev: 0.05424662708785296",
            "extra": "mean: 13.24423487560001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 65.35886858377748,
            "unit": "iter/sec",
            "range": "stddev: 0.0009121637202039221",
            "extra": "mean: 15.300142454549876 msec\nrounds: 55"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.06922832509769947,
            "unit": "iter/sec",
            "range": "stddev: 0.31607935399859377",
            "extra": "mean: 14.444954411199978 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.08386738101595212,
            "unit": "iter/sec",
            "range": "stddev: 0.026711026763128542",
            "extra": "mean: 11.923586832999991 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 34.39138632286137,
            "unit": "iter/sec",
            "range": "stddev: 0.00041581082956215326",
            "extra": "mean: 29.07704826470629 msec\nrounds: 34"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "324f59989281df11f15c750a7513bc8efbe270a7",
          "message": "Get rid of save_state method",
          "timestamp": "2021-04-13T12:34:55Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/330/commits/324f59989281df11f15c750a7513bc8efbe270a7"
        },
        "date": 1618397476205,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.06176267774751596,
            "unit": "iter/sec",
            "range": "stddev: 0.07063975632721084",
            "extra": "mean: 16.19100784599999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.08175987091846805,
            "unit": "iter/sec",
            "range": "stddev: 0.40566613127874007",
            "extra": "mean: 12.230939075200013 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 75.05434678558062,
            "unit": "iter/sec",
            "range": "stddev: 0.0009042434062072691",
            "extra": "mean: 13.323678678556153 msec\nrounds: 56"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.06062137984624981,
            "unit": "iter/sec",
            "range": "stddev: 0.6275084642626049",
            "extra": "mean: 16.49583039080003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.08957784140713429,
            "unit": "iter/sec",
            "range": "stddev: 0.052617382394252656",
            "extra": "mean: 11.163475076999976 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 38.435214168196346,
            "unit": "iter/sec",
            "range": "stddev: 0.0017351234272569276",
            "extra": "mean: 26.017807410254044 msec\nrounds: 39"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "committer": {
            "name": "UCL-CCS",
            "username": "UCL-CCS"
          },
          "id": "d23f771031949443cdbc9d353f7c24e7782780ca",
          "message": "Get rid of save_state method",
          "timestamp": "2021-04-13T12:34:55Z",
          "url": "https://github.com/UCL-CCS/EasyVVUQ/pull/330/commits/d23f771031949443cdbc9d353f7c24e7782780ca"
        },
        "date": 1618405093391,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_db_benchmark.py::test_draw",
            "value": 0.051354302718715786,
            "unit": "iter/sec",
            "range": "stddev: 0.23376214237630435",
            "extra": "mean: 19.472565044399982 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results",
            "value": 0.06967905132406522,
            "unit": "iter/sec",
            "range": "stddev: 0.4608409592197451",
            "extra": "mean: 14.351515713800017 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result",
            "value": 54.32215832490132,
            "unit": "iter/sec",
            "range": "stddev: 0.00428899478945769",
            "extra": "mean: 18.408694183669784 msec\nrounds: 49"
          },
          {
            "name": "tests/test_db_benchmark.py::test_draw_add",
            "value": 0.051494912569314794,
            "unit": "iter/sec",
            "range": "stddev: 0.20783741217712878",
            "extra": "mean: 19.41939407420002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_store_results_add",
            "value": 0.07034961210433267,
            "unit": "iter/sec",
            "range": "stddev: 0.22044119093692566",
            "extra": "mean: 14.214719457399998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_db_benchmark.py::test_get_collation_result_add",
            "value": 32.78144251677192,
            "unit": "iter/sec",
            "range": "stddev: 0.0017832802203978898",
            "extra": "mean: 30.505063939403264 msec\nrounds: 33"
          }
        ]
      }
    ]
  }
}