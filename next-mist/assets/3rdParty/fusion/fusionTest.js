
//window.onload=function(){
$(document).ready(function () {
    
    
    FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'mscolumn3dlinedy',
        renderAt: 'chart-income',
        width: '600',
        height: '500',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "My Income",
                "xAxisName": "Years",
                "yAxisName": "Income",
                "numberPrefix": "$",               
                "theme": "ocean"
            },

            "categories": [{
                "category": [{
                    "label": "2010"
                }, {
                    "label": "2011"
                }, {
                    "label": "2012"
                }, {
                    "label": "2013"
                }, {
                    "label": "2014"
                }]
            }],
            "dataset": [{
                "seriesname": "Salary",
                "data": [{
                    "value": "150000",
                    "link":"salary-2010"
                }, {
                    "value": "190000",
                    "link":"salary-2011"
                }, {
                    "value": "220000",
                    "link":"salary-2012"
                }, {
                    "value": "280000",
                    "link":"salary-2013"
                }, {
                    "value": "350000",
                    "link":"salary-2014"
                }]
    
            }, {
                "seriesname": "Stock",
                    "data": [{
                    "value": "20000"
                }, {
                    "value": "50000"
                }, {
                    "value": "80000"
                }, {
                    "value": "100000"
                }, {
                    "value": "130000"
                }]
            }, {
                "seriesname": "Bonus",
                    "data": [{
                    "value": "2000"
                }, {
                    "value": "5000"
                }, {
                    "value": "8000"
                }, {
                    "value": "10000"
                }, {
                    "value": "13000"
                }]
            }]
            
   
        }
    }).render();

     var salesMap = new FusionCharts({

        type: 'maps/china2',

        renderAt: 'chart-maps',

        width: '600',

        height: '500',

        dataFormat: 'json',

        dataSource: {

            "chart": {
                "animation": "0",
                "showbevel": "0",
                "usehovercolor": "1",
                "canvasbordercolor": "FFFFFF",
                "bordercolor": "FFFFFF",
                "showlegend": "1",
                "showshadow": "0",
                "legendposition": "BOTTOM",
                "legendborderalpha": "0",
                "legendbordercolor": "ffffff",
                "legendallowdrag": "0",
                "legendshadow": "0",
                "connectorcolor": "000000",
                "fillalpha": "80",
                "hovercolor": "CCCCCC",
                "showborder": 0
            },
    "colorrange": {
            "minvalue": "0",
            "startlabel": "Low",
            "endlabel": "High",
            "code": "e44a00",
            "gradient": "1",
            "color": [
                {
                    "maxvalue": "30000",
                    "displayvalue": "Average",
                    "code": "f8bd19"
                },
                {
                    "maxvalue": "100000",
                    "code": "6baa01"
                }
            ]
        },
    "data": [
          {
            "id": "CN.MA",
            "value": "4191"
        },
        {
            "id": "CN.HK",
            "value": "4089"
        },
        {
            "id": "CN.TJ",
            "value": "3414"
        },
        {
            "id": "CN.SH",
            "value": "31888"
        },
        {
            "id": "CN.TA",
            "value": "30030"
        },
        {
            "id": "CN.NM",
            "value": "74233"
        },
        {
            "id": "CN.JX",
            "value": "48533"
        },
        {
            "id": "CN.HN",
            "value": "37843"
        },
        {
            "id": "CN.GX",
            "value": "50628"
        },
        {
            "id": "CN.GZ",
            "value": "60212"
        },
        {
            "id": "CN.YN",
            "value": "43038"
        },
        {
            "id": "CN.CQ",
            "value": "79464"
        },
        {
            "id": "CN.HU",
            "value": "46918"
        },
        {
            "id": "CN.AH",
            "value": "75798"
        },
        {
            "id": "CN.HE",
            "value": "32686"
        },
        {
            "id": "CN.SC",
            "value": "79709"
        },
        {
            "id": "CN.XZ",
            "value": "55213"
        },
        {
            "id": "CN.NX",
            "value": "58453"
        },
        {
            "id": "CN.GD",
            "value": "45927"
        },
        {
            "id": "CN.HA",
            "value": "60329"
        },
        {
            "id": "CN.FJ",
            "value": "38671"
        },
        {
            "id": "CN.ZJ",
            "value": "30111"
        },
        {
            "id": "CN.JS",
            "value": "53891"
        },
        {
            "id": "CN.SD",
            "value": "34537"
        },
        {
            "id": "CN.HB",
            "value": "30993"
        },
        {
            "id": "CN.LN",
            "value": "68757"
        },
        {
            "id": "CN.JL",
            "value": "78921"
        },
        {
            "id": "CN.BJ",
            "value": "64019"
        },
        {
            "id": "CN.SX",
            "value": "53537"
        },
        {
            "id": "CN.SA",
            "value": "98111"
        },
        {
            "id": "CN.GS",
            "value": "84232"
        },
        {
            "id": "CN.QH",
            "value": "94057"
        },
        {
            "id": "CN.HL",
            "value": "94057"
        },
        {
            "id": "CN.XJ",
            "value": "94057"
        }
    ]

        }

    }).render();
    
    });

});
//}

