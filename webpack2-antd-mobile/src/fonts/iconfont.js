;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-search" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M938.020864 904.214528l-246.095872-264.17152c15.245312-20.472832 28.416-42.7264 39.182336-66.42176 21.285888-46.850048 33.181696-99.346432 33.179648-154.628096 0.002048-49.137664-9.396224-96.079872-26.435584-138.805248-25.563136-64.091136-68.279296-118.746112-122.351616-157.503488-27.034624-19.37408-56.91904-34.7648-88.875008-45.30688-31.951872-10.543104-65.97632-16.228352-101.165056-16.22528-46.923776-0.006144-91.756544 10.109952-132.402176 28.352512-30.4896 13.679616-58.640384 31.915008-83.70176 53.853184-37.593088 32.91136-68.255744 74.151936-89.54368 121.007104-21.286912 46.851072-33.181696 99.347456-33.179648 154.628096-0.002048 49.137664 9.396224 96.079872 26.435584 138.805248 25.563136 64.09216 68.279296 118.746112 122.351616 157.503488 27.034624 19.37408 56.91904 34.7648 88.875008 45.30688 31.950848 10.544128 65.975296 16.228352 101.165056 16.226304 46.922752 0.006144 91.756544-10.109952 132.401152-28.352512 28.089344-12.601344 54.183936-29.077504 77.715456-48.745472L878.08 960.054272 938.020864 904.214528zM510.582784 711.985152c-26.898432 8.870912-55.442432 13.645824-85.124096 13.647872-39.57248-0.006144-77.139968-8.48384-111.443968-23.866368-25.719808-11.539456-49.589248-26.97728-70.935552-45.664256-32.021504-28.02688-58.349568-63.36512-76.65152-103.658496-18.302976-40.297472-28.593152-85.51936-28.596224-133.451776 0.002048-42.60864 8.133632-83.069952 22.79424-119.841792 21.988352-55.154688 58.70592-101.95968 104.61696-134.849536 22.956032-16.449536 48.19968-29.42976 75.092992-38.30272 26.897408-8.871936 55.441408-13.645824 85.124096-13.647872 39.571456 0.00512 77.138944 8.48384 111.442944 23.866368 25.720832 11.539456 49.590272 26.97728 70.936576 45.664256 32.021504 28.02688 58.349568 63.36512 76.65152 103.658496 18.302976 40.298496 28.593152 85.51936 28.596224 133.4528-0.002048 42.60864-8.133632 83.069952-22.79424 119.840768-21.988352 55.154688-58.70592 101.958656-104.61696 134.849536C562.719744 690.131968 537.475072 703.112192 510.582784 711.985152z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-guanbi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M821.925167 821.678038c-13.103436 13.103436-34.349319 13.103436-47.452755 0l-572.529585-572.529585c-13.103436-13.103436-13.103436-34.349319 0-47.452755l0 0c13.103436-13.103436 34.349319-13.103436 47.452755 0l572.529585 572.529585C835.029626 787.328719 835.029626 808.573579 821.925167 821.678038L821.925167 821.678038z"  ></path>'+
      ''+
      '<path d="M201.942827 821.677015c-13.103436-13.103436-13.103436-34.349319 0-47.452755l572.529585-572.529585c13.103436-13.103436 34.349319-13.103436 47.452755 0l0 0c13.103436 13.103436 13.103436 34.349319 0 47.452755l-572.529585 572.529585C236.292146 834.781474 215.047286 834.781474 201.942827 821.677015L201.942827 821.677015z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-denglu" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M875.052155 823.429939c-19.820418-51.561329-48.232514-97.906867-84.444251-137.749294-36.403095-40.054251-78.866209-71.533196-126.20947-93.566002-8.992815-4.185322-18.088984-7.988951-27.278273-11.418051 20.349467-11.520381 39.263236-25.873274 56.248072-42.85811 49.285496-49.285496 76.428693-114.813932 76.428693-184.514387 0-69.700455-27.142174-135.228891-76.428693-184.514387s-114.814955-76.428693-184.515411-76.428693-135.228891 27.143197-184.515411 76.428693c-49.285496 49.28652-76.428693 114.813932-76.428693 184.514387 0 69.700455 27.143197 135.228891 76.428693 184.514387 16.984836 16.984836 35.899628 31.337729 56.247049 42.85811-9.18929 3.430122-18.285458 7.232728-27.278273 11.418051-47.343261 22.031782-89.806375 53.511751-126.20947 93.566002-36.21276 39.84345-66.13628 85.633333-84.445274 137.749294-15.278985 43.48949-13.682627 86.440721-14.458293 106.500593l61.380976 0c-2.025123-143.258775 134.198421-310.976614 319.278697-310.976614 185.079252 0 324.882322 173.85563 325.419558 310.976614l61.379952 0C894.560464 891.158483 895.512139 876.651071 875.052155 823.429939zM309.306066 353.324094c0-110.028952 89.515756-199.544709 199.545732-199.544709 110.028952 0 199.545732 89.515756 199.545732 199.544709s-89.51678 199.544709-199.545732 199.544709C398.821823 552.868803 309.306066 463.353047 309.306066 353.324094z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-yuanquanjianhao" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512.925069 1022.976694c-68.565609 0-135.095861-13.430894-197.74676-39.928385-60.488653-25.591865-114.812909-62.212924-161.455205-108.860337-46.647413-46.635133-83.268472-100.965529-108.85215-161.455205C18.372439 650.088008 4.935406 583.559802 4.935406 514.994194S18.372439 379.898333 44.870953 317.248458c25.584702-60.489676 62.20576-114.813932 108.85215-161.455205 46.642297-46.647413 100.966553-83.268472 161.455205-108.854197C377.829208 20.441565 444.35946 7.004531 512.925069 7.004531c68.559469 0 135.087675 13.437034 197.738573 39.933501 60.495816 25.585725 114.820072 62.206784 161.461345 108.854197 46.642297 46.641273 83.263355 100.965529 108.854197 161.455205 26.496467 62.650899 39.929408 129.181151 39.929408 197.74676s-13.43294 135.093814-39.929408 197.738573c-25.589818 60.489676-62.210877 114.820072-108.854197 161.455205-46.641273 46.647413-100.965529 83.268472-161.461345 108.860337C648.012743 1009.5458 581.484537 1022.976694 512.925069 1022.976694L512.925069 1022.976694zM512.925069 59.09491c-121.779577 0-236.261958 47.417963-322.371128 133.527133C104.442724 278.732236 57.026808 393.214616 57.026808 514.994194c0 121.774461 47.415916 236.254795 133.527133 322.364989 86.10917 86.10917 200.591551 133.527133 322.371128 133.527133 121.774461 0 236.256842-47.417963 322.364989-133.527133 86.10917-86.110193 133.527133-200.591551 133.527133-322.364989 0-121.779577-47.417963-236.261958-133.527133-322.373175C749.180887 106.512872 634.698506 59.09491 512.925069 59.09491L512.925069 59.09491zM799.783379 546.244942 226.058572 546.244942c-16.504906 0-29.879518-15.435551-29.879518-34.484396 0-19.049868 13.375635-34.484396 29.879518-34.484396l573.724807 0c16.505929 0 29.879518 15.435551 29.879518 34.484396C829.66392 530.810415 816.284191 546.244942 799.783379 546.244942L799.783379 546.244942zM799.783379 545.221636"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-iconfontfenxianghong" viewBox="0 0 1048 1024">'+
      ''+
      '<path d="M137.699708 118.028321C216.922357 48.272106 324.477175 13.427568 429.547893 20.947006 429.682169 38.872809 429.682169 56.798612 429.682169 74.791553 327.699792 66.197909 222.830487 104.533615 151.932929 178.653789 85.600745 246.261593 48.809209 342.000151 54.180236 436.731642 58.745609 544.017908 117.42408 647.007353 206.717406 706.491479 290.236877 763.558642 399.403004 780.275964 496.282905 751.540968 581.816512 727.035657 655.600997 667.551532 700.180522 590.88012 720.321873 590.745844 740.463225 590.745844 760.604577 590.947258 705.21586 708.169925 590.275879 795.113426 461.706918 814.24771 340.724532 833.986235 211.88702 793.904945 123.802175 708.572752 49.883414 639.01795 5.639578 540.459603 0 439.350018L0 400.410071C5.706716 292.788115 55.724406 188.2545 137.699708 118.028321Z"  ></path>'+
      ''+
      '<path d="M575.774106 115.141394C663.187572 193.491252 750.533901 271.908247 837.880229 350.392381 750.533901 428.607963 663.5904 507.360648 575.908382 585.240542 575.505555 533.678681 575.774106 482.116821 575.706968 430.554961 422.968385 413.099123 259.554885 466.339429 157.572508 584.03206 171.940005 485.675126 226.657344 392.152117 311.385297 338.508984 389.26519 287.34995 484.198094 272.109661 575.706968 271.035456 575.706968 219.070768 575.639831 167.106081 575.774106 115.141394Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-icon32202" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M342.4 96 198.4 96C140.8 96 96 144 96 201.6l0 144C96 403.2 140.8 448 198.4 448l144 0c57.6 0 105.6-48 105.6-105.6L448 201.6C448 144 400 96 342.4 96zM384 345.6c0 22.4-19.2 41.6-41.6 41.6L198.4 387.2C176 384 160 364.8 160 345.6L160 201.6C160 179.2 176 160 198.4 160l144 0C364.8 160 384 179.2 384 201.6L384 345.6z"  ></path>'+
      ''+
      '<path d="M825.6 96l-144 0C624 96 576 144 576 201.6l0 144c0 57.6 48 105.6 105.6 105.6l144 0c57.6 0 105.6-48 105.6-105.6L931.2 201.6C928 144 883.2 96 825.6 96zM864 345.6c0 22.4-19.2 41.6-41.6 41.6l-144 0c-22.4 0-41.6-19.2-41.6-41.6L636.8 201.6C640 179.2 659.2 160 681.6 160l144 0C848 160 864 179.2 864 201.6L864 345.6z"  ></path>'+
      ''+
      '<path d="M342.4 576 198.4 576C140.8 576 96 620.8 96 678.4l0 144C96 880 140.8 928 198.4 928l144 0c57.6 0 105.6-48 105.6-105.6l0-144C448 620.8 400 576 342.4 576zM384 822.4c0 22.4-19.2 41.6-41.6 41.6L198.4 864C176 864 160 844.8 160 822.4l0-144C160 659.2 176 640 198.4 640l144 0c22.4 0 41.6 19.2 41.6 41.6L384 822.4z"  ></path>'+
      ''+
      '<path d="M825.6 576l-144 0c-57.6 0-105.6 48-105.6 105.6l0 144c0 57.6 48 105.6 105.6 105.6l144 0c57.6 0 105.6-48 105.6-105.6l0-144C928 620.8 883.2 576 825.6 576zM864 822.4c0 22.4-19.2 41.6-41.6 41.6l-144 0c-22.4 0-41.6-19.2-41.6-41.6l0-144c0-22.4 19.2-41.6 41.6-41.6l144 0c22.4 0 41.6 19.2 41.6 41.6L864 822.4z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jilu" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M955.998 740.234c0 17.656-14.336 31.966-32.024 31.966L667.798 772.2c-17.688 0-32.024-14.31-32.024-31.966l0 0c0-17.654 14.336-31.962 32.024-31.962l256.176 0C941.662 708.27 955.998 722.58 955.998 740.234L955.998 740.234z"  ></path>'+
      ''+
      '<path d="M960 928.002c0 17.674-14.326 31.998-32 31.998L416 960c-17.674 0-32-14.324-32-31.998l0 0c0-17.676 14.326-32.002 32-32.002l512 0C945.674 896 960 910.326 960 928.002L960 928.002z"  ></path>'+
      ''+
      '<path d="M64.096 940.498c-1.32 12.872 11.176 22.31 23.188 17.082 14.334-6.238 148.936-64.986 211.614-92.372L89.572 711.008C81.71 780.602 65.262 929.132 64.096 940.498zM109.924 651.864l240.31 177.028 386.854-524.836L496.776 127.03 109.924 651.864zM760.056 195.51l-166.374-122.554c-20.418-15.042-49.17-10.692-64.214 9.724l-13.622 18.48 240.31 177.028 13.622-18.48C784.828 239.294 780.472 210.554 760.056 195.51zM624.262 308.89c12.44 8.972 15.238 26.348 6.252 38.814L370.108 708.786c-8.99 12.462-26.362 15.292-38.802 6.322l0 0c-12.444-8.974-15.242-26.352-6.252-38.816l260.404-361.082C594.446 302.746 611.818 299.916 624.262 308.89L624.262 308.89z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-wenhao" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M874.016 874.048C674.4 1073.664 349.6 1073.664 149.952 874.048-49.664 674.432-49.664 349.568 149.952 149.952 349.6-49.664 674.4-49.664 874.016 149.952 1073.664 349.568 1073.664 674.432 874.016 874.048ZM828.768 195.232C654.08 20.544 369.888 20.576 195.232 195.232 20.512 369.92 20.544 654.112 195.232 828.8 369.888 1003.456 654.08 1003.488 828.768 828.8 1003.424 654.144 1003.456 369.888 828.768 195.232ZM588.8 540.032 564.064 564.8C558.016 570.816 553.312 577.888 550.048 585.728 546.4 594.56 545.12 600.352 545.12 608L481.12 608C481.12 591.776 484.064 577.792 490.976 561.248 497.408 545.6 506.784 531.552 518.816 519.552L543.52 494.816C554.048 484.256 562.304 471.936 568 458.176 573.6 444.672 576.48 430.432 576.608 415.84 576.256 380.512 547.392 351.904 512 351.904 476.384 351.904 447.392 380.864 447.392 416.48L447.392 459.808 383.392 459.808 383.392 416.48C383.392 345.568 441.088 287.904 512 287.904 582.4 287.904 639.776 344.768 640.608 414.976 640.608 415.264 640.608 415.52 640.608 415.808 640.608 416 640.608 416.256 640.608 416.48 640.416 439.264 635.872 461.504 627.136 482.656 618.208 504.192 605.312 523.52 588.8 540.032ZM544 736 480 736 480 672.672 544 672.672 544 736Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-yuanquanjiantouyou" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M504.521489 16.450709c-277.680883 0-503.602413 225.919516-503.602413 503.602413 0 277.682897 225.92153 503.605435 503.602413 503.605435 277.683904 0 503.604427-225.922538 503.604427-503.605435C1008.125917 242.370225 782.204386 16.450709 504.521489 16.450709zM504.521489 960.707122c-242.980593 0-440.651985-197.674414-440.651985-440.652993 0-242.9816 197.673407-440.651985 440.651985-440.651985 242.980593 0 440.654 197.673407 440.654 440.651985S747.502082 960.707122 504.521489 960.707122zM589.727159 308.948612c-12.293967-12.295981-32.212489-12.295981-44.506456 0-12.294974 12.294974-12.294974 32.211482 0 44.506456l135.121834 135.122841L252.719779 488.577909c-17.397484 0-31.475214 14.076723-31.475214 31.474207 0 17.368275 14.07773 31.477228 31.475214 31.477228l427.620743 0L545.218689 686.651177c-12.294974 12.294974-12.294974 32.213496 0 44.507463 6.145976 6.147991 14.200609 9.221986 22.254235 9.221986 8.052619 0 16.105237-3.073995 22.254235-9.221986l188.850275-188.851283c12.295981-12.292959 12.295981-32.212489 0-44.507463L589.727159 308.948612z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jinzhiline-copy-copy" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M736 469.333h-512c-17.664 0-32 14.336-32 32s14.336 32 32 32h512c17.664 0 32-14.336 32-32s-14.336-32-32-32z"  ></path>'+
      ''+
      '<path d="M480 21.333c-265.088 0-480 214.912-480 480s214.912 480 480 480 480-214.912 480-480-214.912-480-480-480zM480 917.333c-229.76 0-416-186.24-416-416s186.24-416 416-416 416 186.24 416 416-186.24 416-416 416z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-mimaxiugai" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M790.351566 958.097034 234.337119 958.097034c-55.850006 0-101.094466-50.002834-101.094466-111.698988L133.242653 567.150064c0-61.692061 45.24446-111.698988 101.094466-111.698988l0-83.775009c0-169.648818 124.44529-307.171961 278.004665-307.171961 153.535839 0 278.009781 137.523143 278.009781 307.171961l0 1.74883-0.323365 0c-0.87288 14.555507-11.55415 26.179242-24.961508 26.179242-13.378705 0-24.089651-11.623735-24.936949-26.179242l-0.314155 0 0-1.74883c0-138.804323-101.83841-251.319909-227.473805-251.319909-125.634372 0-227.443106 112.517633-227.443106 251.319909l0 83.775009 505.452887 0c55.8234 0 101.096513 50.007951 101.096513 111.698988l0 279.247982C891.442962 908.0942 846.169849 958.097034 790.351566 958.097034L790.351566 958.097034 790.351566 958.097034zM840.882426 567.150064c0-30.848589-22.606881-55.850006-50.53086-55.850006L234.337119 511.300059c-27.925003 0-50.561559 25.001417-50.561559 55.850006l0 279.247982c0 30.848589 22.636556 55.850006 50.561559 55.850006l556.013423 0c27.89942 0 50.53086-25.001417 50.53086-55.850006L840.881402 567.150064 840.882426 567.150064 840.882426 567.150064zM537.595958 729.052454 537.595958 818.474067c0 15.420201-11.292184 27.925003-25.254174 27.925003-13.96199 0-25.279756-12.508895-25.279756-27.925003l0-89.421612c-29.299303-11.570523-50.535977-41.765219-50.535977-78.115102 0-46.275953 33.92874-83.787288 75.815733-83.787288 41.86141 0 75.815733 37.511335 75.815733 83.787288C588.157517 687.289282 566.895261 717.482955 537.595958 729.052454L537.595958 729.052454 537.595958 729.052454zM512.341784 622.999047c-13.96199 0-25.279756 12.505825-25.279756 27.939329 0 15.401782 11.317767 27.910677 25.279756 27.910677 13.96199 0 25.254174-12.508895 25.254174-27.910677C537.595958 635.504872 526.304797 622.999047 512.341784 622.999047L512.341784 622.999047 512.341784 622.999047z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-daohangyuanxianxing" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M717.650944 275.234816c-2.925568 0-5.771264 0.598016-8.480768 1.787904L243.554304 484.104192c-8.477696 3.781632-13.492224 12.833792-12.193792 22.001664 1.282048 9.20576 8.598528 16.529408 17.785856 17.80736l211.39456 29.725696 29.674496 211.740672c1.284096 9.198592 8.599552 16.52224 17.773568 17.806336 0.955392 0.137216 1.910784 0.203776 2.922496 0.203776 8.230912 0 15.719424-4.87424 19.083264-12.425216l206.75584-466.348032c3.477504-7.86432 1.738752-17.216512-4.323328-23.268352C728.485888 277.405696 723.238912 275.234816 717.650944 275.234816zM521.450496 687.184896l-21.725184-154.9568c-1.281024-9.20064-8.59648-16.524288-17.785856-17.80736l-154.749952-21.763072 349.385728-155.374592L521.450496 687.184896z"  ></path>'+
      ''+
      '<path d="M921.5744 340.601856c-22.755328-53.797888-55.325696-102.110208-96.807936-143.592448s-89.793536-74.052608-143.592448-96.807936c-55.71072-23.564288-114.876416-35.511296-175.854592-35.511296S385.175552 76.638208 329.465856 100.202496c-53.798912 22.755328-102.110208 55.325696-143.592448 96.807936S111.8208 286.803968 89.065472 340.601856c-23.563264 55.71072-35.511296 114.87744-35.511296 175.854592s11.948032 120.143872 35.511296 175.853568c22.755328 53.798912 55.325696 102.110208 96.807936 143.592448s89.793536 74.052608 143.592448 96.807936c55.71072 23.564288 114.876416 35.511296 175.854592 35.511296s120.143872-11.947008 175.854592-35.511296c53.798912-22.755328 102.110208-55.325696 143.592448-96.807936s74.052608-89.792512 96.807936-143.592448c23.563264-55.709696 35.511296-114.876416 35.511296-175.853568S945.137664 396.312576 921.5744 340.601856zM879.532032 674.52928c-20.453376 48.357376-49.738752 91.79136-87.044096 129.09568-37.30432 37.30432-80.738304 66.589696-129.09568 87.043072-50.05312 21.1712-103.236608 31.905792-158.071808 31.905792s-108.018688-10.734592-158.071808-31.905792c-48.357376-20.453376-91.792384-49.738752-129.09568-87.043072-37.305344-37.305344-66.59072-80.739328-87.044096-129.09568-21.170176-50.054144-31.904768-103.236608-31.904768-158.071808 0-54.836224 10.734592-108.018688 31.904768-158.071808 20.453376-48.3584 49.738752-91.792384 87.044096-129.09568 37.30432-37.305344 80.738304-66.59072 129.09568-87.044096 50.05312-21.1712 103.236608-31.905792 158.071808-31.905792s108.018688 10.734592 158.071808 31.905792c48.357376 20.453376 91.792384 49.738752 129.09568 87.044096 37.305344 37.30432 66.59072 80.738304 87.044096 129.09568 21.170176 50.05312 31.904768 103.235584 31.904768 158.071808C911.4368 571.291648 900.702208 624.475136 879.532032 674.52928z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-yuanquanjiantou" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M392 546.048h376.256v-68.096H392l142.272-136.32H433.663L255.743 512l177.92 170.368h100.609z" fill="" ></path>'+
      ''+
      '<path d="M1015.36 512C1015.36 234.048 789.952 8.64 512 8.64S8.64 234.048 8.64 512 234.048 1015.36 512 1015.36 1015.36 789.952 1015.36 512z m-975.359 0c0-260.672 211.328-472 472-472s472 211.328 472 472-211.328 472-472 472-472-211.328-472-472z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-chenggong" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z m0 960a448 448 0 1 1 448-448 448 448 0 0 1-448 448z" fill="" ></path>'+
      ''+
      '<path d="M424.96 646.72L269.44 492.8l-45.12 44.8 200.64 198.4L800 365.12l-45.12-44.8-329.92 326.4z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-icon_left" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M716.748 514.986c0 4.92-1.89 9.255-5.67 13.021l-264.12 264.134c-3.781 3.781-8.13 5.655-13.050 5.655s-9.255-1.875-13.035-5.655l-28.335-28.35c-3.781-3.781-5.67-8.115-5.67-13.035 0-4.905 1.89-9.255 5.67-13.035l222.75-222.75-222.75-222.736c-3.781-3.781-5.67-8.115-5.67-13.035s1.89-9.27 5.67-13.050l28.335-28.335c3.781-3.781 8.115-5.67 13.035-5.67s9.27 1.89 13.050 5.67l264.12 264.121c3.779 3.779 5.67 8.13 5.67 13.050z" fill="#1296db" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-icon_right" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M307.252 509.014c0-4.92 1.89-9.255 5.67-13.021l264.12-264.134c3.781-3.781 8.13-5.655 13.050-5.655s9.255 1.875 13.035 5.655l28.334 28.35c3.781 3.781 5.67 8.115 5.67 13.035 0 4.904-1.89 9.255-5.67 13.035l-222.75 222.75 222.75 222.736c3.781 3.781 5.67 8.115 5.67 13.035s-1.89 9.269-5.67 13.050l-28.335 28.335c-3.781 3.781-8.115 5.67-13.035 5.67s-9.269-1.89-13.050-5.67l-264.12-264.121c-3.779-3.779-5.67-8.13-5.67-13.050z" fill="#1296db" ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    // console && console.log(e)
  }
}

ready(appendSvg)


})(window)
