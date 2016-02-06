/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'obama_2715128b',
                            type: 'image',
                            rect: ['0px', '0px', '620px', '400px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"obama_2715128b.jpg",'0px','0px']
                        },
                        {
                            id: 'TextOne',
                            symbolName: 'TextOne',
                            type: 'rect',
                            rect: ['635px', '10px', '359', '381', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'TextTwo',
                            symbolName: 'TextTwo',
                            type: 'rect',
                            rect: ['635', '10', '359', '381', 'auto', 'auto'],
                            opacity: '0'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '1000px', '400px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 18682.265625,
                    autoPlay: true,
                    data: [
                        [
                            "eid14",
                            "opacity",
                            9043,
                            957,
                            "linear",
                            "${TextOne}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17",
                            "opacity",
                            17000,
                            974,
                            "linear",
                            "${TextOne}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2",
                            "top",
                            0,
                            0,
                            "linear",
                            "${TextOne}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid7",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${TextTwo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11",
                            "opacity",
                            7000,
                            1000,
                            "linear",
                            "${TextTwo}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1",
                            "left",
                            0,
                            0,
                            "linear",
                            "${TextOne}",
                            '635px',
                            '635px'
                        ]
                    ]
                }
            },
            "TextOne": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '359px', '381px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            id: 'Text2',
                            text: 'Russia has \"violated just about every commitment\" it has made in the effort to end the fighting in Ukraine, but the United States and its European allies won\'t relent in their efforts to rein in Moscow\'s aggression, President Barack Obama said Monday at a news conference.',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '359px', '381px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "TextTwo": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '359px', '381px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            id: 'Text4',
                            text: 'The progress that Ukraine needs cannot be achieved with more weapons,\" she said last week. \"I have grave doubts about the validity of this point.\"<br>Merkel said she believes that if the West sends weapons to Ukraine, Russia could further step up its involvement in the conflict, possibly introducing its air force into the fight.<br>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '359px', '381px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("MerkelFeb0915_edgeActions.js");
})("EDGE-473152460");
