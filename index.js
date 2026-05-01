window.onload = function () {

    readProjectConfig = async () => {
        return {
	"description" : "Including: Matrix Speed Slider",
	"file" : "index.html",
	"general" : 
	{
		"properties" : 
		{
			"schemecolor" : 
			{
				"order" : 0,
				"text" : "Scheme color",
				"type" : "color",
				"value" : "0 0 0"
			},
			"folder_rain" : 
			{
				"index" : 0,
				"order" : 100,
				"text" : "<h4>Rain</h4>",
				"type" : "text"
			},
			"ui_rain_matrixspeed" : 
			{
				"fraction" : false,
				"index" : 1,
				"max" : 60,
				"min" : 10,
				"order" : 101,
				"text" : "Matrix Speed",
				"type" : "slider",
				"value" : 25
			},
			"ui_rain_traillength" : 
			{
				"fraction" : true,
				"index" : 2,
				"max" : 1,
				"min" : 0,
				"order" : 102,
				"precision" : 3,
				"step" : 0.01,
				"text" : "Trail Length",
				"type" : "slider",
				"value" : 0.75
			},
			"ui_rain_dropcount" : 
			{
				"fraction" : false,
				"index" : 3,
				"max" : 5,
				"min" : 1,
				"order" : 103,
				"text" : "Drop Count/Column",
				"type" : "slider",
				"value" : 1
			},
			"ui_rain_initialanimation" : 
			{
				"index" : 4,
				"options" : 
				[
					{
						"label" : "None",
						"value" : "0"
					},
					{
						"label" : "Fall",
						"value" : "1"
					},
					{
						"label" : "Scatter",
						"value" : "2"
					}
				],
				"order" : 104,
				"text" : "Initial Animation",
				"type" : "combo",
				"value" : "1"
			},
			"folder_color" : 
			{
				"index" : 5,
				"order" : 105,
				"text" : "<h4>Color</h4>",
				"type" : "text"
			},
			"ui_color_colormode" : 
			{
				"index" : 6,
				"options" : 
				[
					{
						"label" : "Single",
						"value" : "0"
					},
					{
						"label" : "RGB Cycle",
						"value" : "1"
					},
					{
						"label" : "Vertical Rainbow",
						"value" : "2"
					},
					{
						"label" : "Horizontal Rainbow",
						"value" : "3"
					},
					{
						"label" : "Column Fixed Rainbow",
						"value" : "4"
					}
				],
				"order" : 106,
				"text" : "Color Mode",
				"type" : "combo",
				"value" : "2"
			},
			"ui_color_matrixcolor" : 
			{
				"condition" : "ui_color_colormode.value == 0",
				"index" : 7,
				"order" : 107,
				"text" : "Matrix Color",
				"type" : "color",
				"value" : "0 1 0"
			},
			"ui_color_coloranimationspeed" : 
			{
				"condition" : "ui_color_colormode.value != 0",
				"fraction" : true,
				"index" : 8,
				"max" : 1,
				"min" : -1,
				"order" : 108,
				"precision" : 3,
				"step" : 0.01,
				"text" : "Color Animation Speed",
				"type" : "slider",
				"value" : 0.5
			},
			"ui_color_highlightfirstcharacter" : 
			{
				"index" : 9,
				"order" : 109,
				"text" : "Highlight First Character",
				"type" : "bool",
				"value" : true
			},
			"ui_color_highlightmode" : 
			{
				"index" : 10,
				"options" : 
				[
					{
						"label" : "Character",
						"value" : "0"
					},
					{
						"label" : "Speed Value",
						"value" : "1"
					}
				],
				"order" : 109.5,
				"text" : "Highlight Mode",
				"type" : "combo",
				"value" : "0"
			},
			"folder_characters" : 
			{
				"index" : 10,
				"order" : 110,
				"text" : "<h4>Characters</h4>",
				"type" : "text"
			},
			"folder_font" : 
			{
				"index" : 13,
				"order" : 113,
				"text" : "<h4>Font</h4>",
				"type" : "text"
			},
			"ui_font_size" : 
			{
				"fraction" : false,
				"index" : 14,
				"max" : 30,
				"min" : 5,
				"order" : 114,
				"text" : "Font size",
				"type" : "slider",
				"value" : 15
			},
			"ui_font_font" : 
			{
				"index" : 15,
				"options" : 
				[
					{
						"label" : "Custom",
						"value" : "0"
					},
					{
						"label" : "MonoSpace",
						"value" : "1"
					},
					{
						"label" : "Consolas",
						"value" : "2"
					},
					{
						"label" : "Courier Bold",
						"value" : "3"
					}
				],
				"order" : 115,
				"text" : "Font",
				"type" : "combo",
				"value" : "3"
			},
			"ui_font_customfont" : 
			{
				"condition" : "ui_font_font.value == 0",
				"index" : 16,
				"order" : 116,
				"text" : "Custom Font",
				"type" : "textinput",
				"value" : "monospace"
			},
			"folder_logo" : 
			{
				"index" : 22,
				"order" : 122,
				"text" : "<h4>Logo</h4>",
				"type" : "text"
			},
			"ui_logo_logo" : 
			{
				"index" : 23,
				"options" : 
				[
					{
						"label" : "None",
						"value" : "0"
					},
					{
						"label" : "Custom",
						"value" : "1"
					}
				],
				"order" : 123,
				"text" : "Logo",
				"type" : "combo",
				"value" : "1"
			},
			"ui_logo_customlogo" : 
			{
				"condition" : "ui_logo_logo.value == 1",
				"index" : 24,
				"order" : 124,
				"text" : "Custom Logo URL (SVG/PNG)",
				"type" : "textinput",
				"value" : ""
			},
			"ui_logo_preservecolor" : 
			{
				"condition" : "ui_logo_logo.value != 0",
				"index" : 25,
				"order" : 125,
				"text" : "Preserve Logo Color",
				"type" : "bool",
				"value" : false
			},
			"ui_logo_scale" : 
			{
				"condition" : "ui_logo_logo.value != 0",
				"fraction" : true,
				"index" : 26,
				"max" : 10,
				"min" : 0,
				"order" : 126,
				"precision" : 2,
				"step" : 0.1,
				"text" : "Logo Scale",
				"type" : "slider",
				"value" : 1
			},
			"ui_logo_positionx" : 
			{
				"condition" : "ui_logo_logo.value != 0",
				"fraction" : false,
				"index" : 27,
				"max" : 2500,
				"min" : -2500,
				"order" : 127,
				"text" : "Logo Position X",
				"type" : "slider",
				"value" : 0
			},
			"ui_logo_positiony" : 
			{
				"condition" : "ui_logo_logo.value != 0",
				"fraction" : false,
				"index" : 28,
				"max" : 2500,
				"min" : -2500,
				"order" : 128,
				"text" : "Logo Position Y",
				"type" : "slider",
				"value" : 0
			},
			"folder_clock" : 
			{
				"index" : 29,
				"order" : 129,
				"text" : "<h4>Clock</h4>",
				"type" : "text"
			},
			"ui_clock_clock" : 
			{
				"index" : 30,
				"options" : 
				[
					{
						"label" : "None",
						"value" : "0"
					},
					{
						"label" : "Horizontal",
						"value" : "1"
					},
					{
						"label" : "Stacked",
						"value" : "2"
					},
					{
						"label" : "Vertical",
						"value" : "3"
					}
				],
				"order" : 130,
				"text" : "Clock",
				"type" : "combo",
				"value" : "0"
			},
			"ui_clock_24hourformat" : 
			{
				"condition" : "ui_clock_clock.value != 0",
				"index" : 31,
				"order" : 131,
				"text" : "24 Hour format",
				"type" : "bool",
				"value" : true
			},
			"ui_clock_daylightsaving" : 
			{
				"condition" : "ui_clock_clock.value != 0",
				"fraction" : false,
				"index" : 32,
				"max" : 1,
				"min" : -1,
				"order" : 132,
				"text" : "Day-light Saving",
				"type" : "slider",
				"value" : 0
			},
			"ui_clock_scale" : 
			{
				"condition" : "ui_clock_clock.value != 0",
				"fraction" : false,
				"index" : 33,
				"max" : 10,
				"min" : 0,
				"order" : 133,
				"text" : "Clock Scale",
				"type" : "slider",
				"value" : 1
			},
			"ui_clock_positionx" : 
			{
				"condition" : "ui_clock_clock.value != 0",
				"fraction" : false,
				"index" : 34,
				"max" : 100,
				"min" : -100,
				"order" : 134,
				"text" : "Clock Position X",
				"type" : "slider",
				"value" : 0
			},
			"ui_clock_positiony" : 
			{
				"condition" : "ui_clock_clock.value != 0",
				"fraction" : false,
				"index" : 35,
				"max" : 100,
				"min" : -100,
				"order" : 135,
				"text" : "Clock Position Y",
				"type" : "slider",
				"value" : 0
			},
			"folder_day" : 
			{
				"index" : 36,
				"order" : 136,
				"text" : "<h4>Day</h4>",
				"type" : "text"
			},
			"ui_day_day" : 
			{
				"index" : 37,
				"options" : 
				[
					{
						"label" : "None",
						"value" : "0"
					},
					{
						"label" : "Full",
						"value" : "1"
					},
					{
						"label" : "Short",
						"value" : "2"
					}
				],
				"order" : 137,
				"text" : "Day",
				"type" : "combo",
				"value" : "0"
			},
			"ui_day_allcaps" : 
			{
				"condition" : "ui_day_day.value != 0",
				"index" : 38,
				"order" : 138,
				"text" : "All CAPS",
				"type" : "bool",
				"value" : false
			},
			"ui_day_orientation" : 
			{
				"condition" : "ui_day_day.value != 0",
				"index" : 39,
				"order" : 139,
				"text" : "Vertical Orientation",
				"type" : "bool",
				"value" : false
			},
			"ui_day_scale" : 
			{
				"condition" : "ui_day_day.value != 0",
				"fraction" : false,
				"index" : 40,
				"max" : 10,
				"min" : 0,
				"order" : 140,
				"text" : "Day Scale",
				"type" : "slider",
				"value" : 1
			},
			"ui_day_positionx" : 
			{
				"condition" : "ui_day_day.value != 0",
				"fraction" : false,
				"index" : 41,
				"max" : 100,
				"min" : -100,
				"order" : 141,
				"text" : "Day Position X",
				"type" : "slider",
				"value" : 0
			},
			"ui_day_positiony" : 
			{
				"condition" : "ui_day_day.value != 0",
				"fraction" : false,
				"index" : 42,
				"max" : 100,
				"min" : -100,
				"order" : 142,
				"text" : "Day Position Y",
				"type" : "slider",
				"value" : 0
			},
			"folder_date" : 
			{
				"index" : 43,
				"order" : 143,
				"text" : "<h4>Date</h4>",
				"type" : "text"
			},
			"ui_date_monthname" : {
				"index" : 47,
				"order" : 147,
				"text" : "Month Name",
				"type" : "bool",	
				"value": false
			},
			"ui_date_allcaps" : {
				"index" : 48,
				"order" : 148,
				"text" : "All CAPS",
				"type" : "bool",	
				"value": false
			},
			"ui_date_delimiter" : 
			{
				"index" : 50,
				"options" : 
				[
					{
						"label" : "None",
						"value" : "0"
					},
					{
						"label" : "Space",
						"value" : "1"
					},
					{
						"label" : "-",
						"value" : "2"
					},
					{
						"label" : ".",
						"value" : "3"
					},
					{
						"label" : "/",
						"value" : "4"
					}
				],
				"order" : 150,
				"text" : "Date Delimiter",
				"type" : "combo",
				"value" : "0"
			},
			"ui_date_scale" : 
			{
				"fraction" : false,
				"index" : 51,
				"max" : 10,
				"min" : 0,
				"order" : 151,
				"text" : "Date Scale",
				"type" : "slider",
				"value" : 1
			},
			"ui_date_positionx" : 
			{
				"fraction" : false,
				"index" : 52,
				"max" : 100,
				"min" : -100,
				"order" : 152,
				"text" : "Date Position X",
				"type" : "slider",
				"value" : 0
			},
			"ui_date_positiony" : 
			{
				"fraction" : false,
				"index" : 53,
				"max" : 100,
				"min" : -100,
				"order" : 153,
				"text" : "Date Position Y",
				"type" : "slider",
				"value" : 0
			},
			"folder_other" : 
			{
				"index" : 60,
				"order" : 160,
				"text" : "<h4>Other</h4>",
				"type" : "text"
			},
			"ui_other_codescommaseparated" : 
			{
				"index" : 61,
				"order" : 161,
				"text" : "Codes (comma separated)",
				"type" : "textinput",
				"value" : "IP.AF,THE MATRIX"
			},
			"ui_other_codeprobability" : 
			{
				"fraction" : true,
				"index" : 62,
				"max" : 100,
				"min" : 0,
				"order" : 162,
				"step" : 0.1,
				"text" : "Code Probability (%)",
				"type" : "slider",
				"value" : 5
			}
		},
		"supportsaudioprocessing" : true
	},
	"monetization" : false,
	"preview" : "images/preview.gif",
	"snapshotformat" : 1,
	"snapshotoverlay" : "",
	"tags" : [ "Sci-Fi", "Hacker", "Matrix", "Music" ],
	"title" : "Neo Matrix",
	"type" : "web",
	"version" : 7,
	"visibility" : "public"
};
    }

    var gui;
    var options = {
        ui_rain_matrixSpeed: 5,
        ui_rain_speedVariance: 75,
        fpsInterval: calculateFpsInterval(5),
        ui_rain_trailLength: 0.75,
        trailLength: calculateTrailLength(0.75),
        ui_rain_dropCount: 0.75,
        ui_rain_initialAnimation: "2",

        
        ui_char_1_enable: true,
        ui_char_1_double: false,
        ui_char_1_text: "ㄱㄲㄳㄴㄵㄶㄷㄸㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅃㅄㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ",
        ui_char_2_enable: true,
        ui_char_2_double: false,
        ui_char_2_text: "ㅥㅦㅧㅨㅩㅪㅫㅬㅭㅮㅯㅰㅱㅲㅳㅴㅵㅶㅷㅸㅹㅺㅻㅼㅽㅾㅿㆀㆁㆂㆃㆄㆅㆆㆍㆎ",
        ui_char_3_enable: true,
        ui_char_3_double: false,
        ui_char_3_text: "㉮㉯㉰㉱㉲㉳㉴㉵㉶㉷㉸㉹㉺㉻",
        ui_char_4_enable: true,
        ui_char_4_double: false,
        ui_char_4_text: "abcdefghijklmnopqrstuvwxyz",
        ui_char_5_enable: true,
        ui_char_5_double: false,
        ui_char_5_text: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        ui_char_6_enable: true,
        ui_char_6_double: false,
        ui_char_6_text: "あいうえおがぎぐげござじずぜぞだぢづでどなにぬねのぱぴぷぺぽまみむめもやゆよらりるれろわゐゑをん",
        ui_char_7_enable: true,
        ui_char_7_double: false,
        ui_char_7_text: "アイウエオガギグゲゴザジズゼゾダヂヅデドナニヌネノパピプペポマミムメモヤユヨラリルレロワヰヱヲンヴヵヶ",
        ui_char_8_enable: true,
        ui_char_8_double: false,
        ui_char_8_text: "0123456789",
        ui_char_9_enable: true,
        ui_char_9_double: false,
        ui_char_9_text: "ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ",
        ui_char_10_enable: true,
        ui_char_10_double: false,
        ui_char_10_text: "（）［］｛｝〔〕〈〉《》「」『』【】",

        ui_font_font: "Master",
        ui_font_customFont: "Master",
        ui_font_size: 15,
        ui_other_codesCommaSeparated: "！,＇,：,？,＾,｀,·,‥,∼,´,～,ˇ,˘,˝,˚,˙,¸,˛,¿,ː,¡,＂,±,×,÷,≠,≤,≥,∞,∴,∂,⌒,∇,≡,≒,√,∽,∵,＄,％,＃,＆,＊,＠,§,※,☆,★,○,●,◎,◇,◆,□,■,△,▲,▽,▼,〓,◁,◀,▷,▶,♤,♠,♡,♥,♧,♣,⊙,◈,▣,◐,◑,▤,▥,▨,▧,▦,▩,♩,♪,♬",
        codes: makeCodes("！,＇,：,？,＾,｀,·,‥,∼,´,～,ˇ,˘,˝,˚,˙,¸,˛,¿,ː,¡,＂,±,×,÷,≠,≤,≥,∞,∴,∂,⌒,∇,≡,≒,√,∽,∵,＄,％,＃,＆,＊,＠,§,※,☆,★,○,●,◎,◇,◆,□,■,△,▲,▽,▼,〓,◁,◀,▷,▶,♤,♠,♡,♥,♧,♣,⊙,◈,▣,◐,◑,▤,▥,▨,▧,▦,▩,♩,♪,♬"),
        ui_other_codeProbability: 5,
        ui_color_colorMode: "4",
        ui_color_matrixColor: [0, 1, 0],
        matrixColor: rgbToHue([0, 1, 0]),
        ui_color_colorAnimationSpeed: 0.5,
        colorAnimationSpeed: calculateColorAnimationSpeed(0.5),
        ui_color_highlightFirstCharacter: true,
        ui_color_highlightMode: "1",
        ui_logo_logo: "1",
        ui_logo_customLogo: "TEST.png",
        ui_logo_preserveColor: false,
        ui_logo_scale: 0.5,
        ui_logo_position: "left-bottom",
        ui_logo_margin: 0.1,
        ui_logo_positionX: 0,
        ui_logo_positionY: 0,
        ui_logo_colorMode: true,
        ui_logo_color: [1, 1, 1],
        ui_info_enabled: true,
        ui_info_showDate: false,
        ui_info_showDay: false,
        ui_info_showClock: true,
        ui_info_scale: 2,
        ui_info_lineHeight: 5,
        ui_info_dateColorMode: true,
        ui_info_dateColor: [1, 1, 1],
        ui_info_dateLabelColor: [1, 0x96/255, 0],
        ui_info_dayColorMode: true,
        ui_info_dayColor: [1, 1, 1],
        ui_info_dayColorSat: [0x4f/255, 0xa0/255, 1],
        ui_info_dayColorSun: [1, 0x33/255, 0x33/255],
        ui_info_dayColorBracket: [0, 1, 0],
        ui_info_clockColorMode: false,
        ui_info_clockColor: [1, 1, 1],
        ui_info_clockColonColor: [1, 0, 1],
        ui_info_positionX: 0,
        ui_info_positionY: 0,
        ui_info_align: "2",
        ui_info_position: "center-top",
        ui_info_margin: 0.8,
        ui_info_font: "Master",
        ui_info_charSpacing: 10,
        ui_clock_24HourFormat: true,
        ui_clock_dayLightSaving: 0,
        ui_clock_clock: "2",
        ui_clock_scale: 1,
        ui_clock_positionX: 0,
        ui_clock_positionY: 0,
        ui_day_day: "2",
        ui_day_allCaps: false,
        ui_day_orientation: false,
        ui_day_scale: 1,
        ui_day_positionX: 0,
        ui_day_positionY: 0,
        ui_date_scale: 1,
        ui_date_positionX: 0,
        ui_date_positionY: 0,
        ui_date_monthName: false,
        ui_date_allCaps: false,
        ui_date_delimiter: "0",
        "💾 설정 저장 (파일)"() {
            try {
                const data = JSON.stringify(gui.save(), null, 2);
                const blob = new Blob([data], { type: "application/json" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "settings.json";
                a.style.display = "none";
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                setTimeout(() => URL.revokeObjectURL(url), 1000);
                Log("설정이 settings.json 파일로 저장되었습니다.");
            } catch(err) {
                Log("저장 오류: " + err.message);
            }
        },
        "📂 설정 불러오기 (파일)"() {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = ".json,application/json";
            input.style.display = "none";
            document.body.appendChild(input);
            input.onchange = function(e) {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = function(ev) {
                    try {
                        const preset = JSON.parse(ev.target.result);
                        gui.load(preset);
                        if (typeof applyAllSettings === "function") applyAllSettings();
                        Log("설정 파일을 불러왔습니다: " + file.name);
                    } catch(err) {
                        Log("오류: 올바른 설정 파일이 아닙니다.");
                    }
                };
                reader.readAsText(file);
                document.body.removeChild(input);
            };
            input.click();
        },
        "🔄 초기화"() {
            gui.reset();
            if (typeof applyAllSettings === "function") applyAllSettings();
            Log("설정이 초기값으로 리셋되었습니다.");
        },
        LoadFrom(params) {
            let preset = gui.load(JSON.parse(atob(params.preset)));
            if (preset) {
                gui.load(preset);
                Log("URL에서 설정을 불러왔습니다.");
            } else
                Log("잘못된 URL 설정값입니다.");
        }
    }

    drawGui();

    function drawGui() {
        const params = getUrlParams();

        readProjectConfig().then((config) => {
            gui = new lil.GUI({ autoPlace: false, width: 300, title: "⚙ 설정" });

            const rainFolder = gui.addFolder('🌧 비');
            rainFolder.add(options, 'ui_rain_matrixSpeed').min(1).max(100).step(1).name('최소 속도').onChange(() => {
                options.fpsInterval = calculateFpsInterval(options.ui_rain_matrixSpeed);
                initialAnimation();
            });
            rainFolder.add(options, 'ui_rain_speedVariance').min(1).max(100).step(1).name('최대 속도').onChange(initialAnimation);
            rainFolder.add(options, 'ui_rain_trailLength').min(0).max(1).step(0.01).name('잔상 길이').onChange(() => {
                options.trailLength = calculateTrailLength(options.ui_rain_trailLength);
                updateMask();
            });
            rainFolder.add(options, "ui_rain_dropCount").min(0.1).max(5).step(0.01).name("빗방울 수/열").onChange(initialAnimation);
            rainFolder.add(options, "ui_rain_initialAnimation", {"없음":"0","낙하":"1","흩어짐":"2"}).name("초기 애니메이션").onChange(initialAnimation);
            rainFolder.close();

            const colorFolder = gui.addFolder("🎨 색상");
            colorFolder.add(options, 'ui_color_colorMode', {"단색":"0","RGB 순환":"1","세로 무지개":"2","가로 무지개":"3","열 고정 무지개":"4"}).name('색상 모드');
            colorFolder.addColor(options, 'ui_color_matrixColor').name('매트릭스 색상').onChange(() => {
                options.matrixColor = rgbToHue(options.ui_color_matrixColor);
            });
            colorFolder.add(options, 'ui_color_colorAnimationSpeed').min(-1).max(1).step(0.01).name('색상 애니메이션 속도').onChange(() => {
                options.colorAnimationSpeed = calculateColorAnimationSpeed(options.ui_color_colorAnimationSpeed);
            });
            colorFolder.add(options, 'ui_color_highlightFirstCharacter').name('첫 글자 강조');
            colorFolder.add(options, 'ui_color_highlightMode', {"문자":"0","속도값":"1"}).name('강조 글자 표시');
            colorFolder.close();

            const characterFolder = gui.addFolder("🔤 문자");

            const charStyle = document.createElement('style');
            charStyle.textContent = `
                /* 문자 폴더 내 세트N(enable), 문자내용(text), 2배비중(double) 3행을 1행으로 */
                .lil-gui .char-row-group {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    gap: 4px;
                    padding: 0 var(--padding);
                    box-sizing: border-box;
                    margin: var(--spacing) 0;
                }
                .lil-gui .char-row-group .ctrl-enable { flex-shrink: 0; }
                .lil-gui .char-row-group .ctrl-enable .name { display: none; }
                .lil-gui .char-row-group .ctrl-enable .widget { width: auto; }
                .lil-gui .char-row-group .ctrl-text { flex: 1; min-width: 0; }
                .lil-gui .char-row-group .ctrl-text .name { display: none; }
                .lil-gui .char-row-group .ctrl-text .widget { width: 100%; }
                .lil-gui .char-row-group .ctrl-text input { width: 100%; }
                .lil-gui .char-row-group .ctrl-double { flex-shrink: 0; }
                .lil-gui .char-row-group .ctrl-double .name { display: none; }
                .lil-gui .char-row-group .ctrl-double .widget { width: auto; }
            `;
            document.head.appendChild(charStyle);

            for (let i = 1; i <= 10; i++) {
                const enCtrl  = characterFolder.add(options, `ui_char_${i}_enable`).name(`세트${i}`).onChange(updateCharSet);
                const txtCtrl = characterFolder.add(options, `ui_char_${i}_text`).name(`문자내용${i}`).onChange(updateCharSet);
                const dblCtrl = characterFolder.add(options, `ui_char_${i}_double`).name(`2배비중${i}`).onChange(updateCharSet);

                enCtrl.domElement.classList.add('ctrl-enable');
                txtCtrl.domElement.classList.add('ctrl-text');
                dblCtrl.domElement.classList.add('ctrl-double');

                const group = document.createElement('div');
                group.classList.add('char-row-group');

                const parent = enCtrl.domElement.parentNode;
                parent.insertBefore(group, enCtrl.domElement);
                group.appendChild(enCtrl.domElement);
                group.appendChild(txtCtrl.domElement);
                group.appendChild(dblCtrl.domElement);
            }
            characterFolder.close();

            const fontFolder = gui.addFolder("✏️ 폰트");
            fontFolder.add(options, 'ui_font_size').min(5).max(30).step(1).name('폰트 크기').onChange(updateFont);

            const fontFileInput = document.createElement("input");
            fontFileInput.type = "file";
            fontFileInput.accept = ".ttf,.otf,.woff,.woff2";
            fontFileInput.style.display = "none";
            document.body.appendChild(fontFileInput);

            fontFileInput.addEventListener("change", function() {
                if (fontFileInput.files && fontFileInput.files[0]) {
                    const file = fontFileInput.files[0];
                    const fontName = "custom-" + file.name.replace(/\.[^.]+$/, "").replace(/\s+/g, "-");
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const style = document.createElement("style");
                        style.innerHTML = `@font-face { font-family: "${fontName}"; src: url("${e.target.result}"); }`;
                        document.head.appendChild(style);
                        options.ui_font_font = fontName;
                        options.ui_font_customFont = fontName;
                        updateFont();
                        Log("폰트 불러옴: " + file.name);
                    };
                    reader.readAsDataURL(file);
                }
            });

            options["📂 폰트 파일 선택"] = function() { fontFileInput.click(); };
            fontFolder.add(options, "📂 폰트 파일 선택");

            fontFolder.close();

            const logoFolder = gui.addFolder("🖼 로고");

            const fileInput = document.createElement("input");
            fileInput.type = "file";
            fileInput.accept = "image/*";
            fileInput.style.display = "none";
            document.body.appendChild(fileInput);

            options["이미지 파일 선택"] = function() {
                fileInput.click();
            };
            logoFolder.add(options, "이미지 파일 선택");

            fileInput.addEventListener("change", function() {
                if (fileInput.files && fileInput.files[0]) {
                    const file = fileInput.files[0];
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        options.ui_logo_logo = "1";
                        options.ui_logo_customLogo = e.target.result;
                        updateLogo();
                        Log("로고 불러옴: " + file.name);
                    };
                    reader.readAsDataURL(file);
                }
            });

            options["로고 제거"] = function() {
                options.ui_logo_logo = "0";
                options.ui_logo_customLogo = "";
                fileInput.value = "";
                updateLogo();
                Log("로고가 제거되었습니다.");
            };
            logoFolder.add(options, "로고 제거");

            logoFolder.add(options, "ui_logo_preserveColor").name("원본 색상 유지").onChange(updateLogo);
            logoFolder.add(options, "ui_logo_scale").min(0).max(10).step(0.1).name("크기").onChange(updateLogo);
            logoFolder.add(options, "ui_logo_position", {
                "왼쪽 상단": "left-top",
                "왼쪽 중앙": "left-middle",
                "왼쪽 하단": "left-bottom",
                "중앙 상단": "center-top",
                "중앙": "center-middle",
                "중앙 하단": "center-bottom",
                "오른쪽 상단": "right-top",
                "오른쪽 중앙": "right-middle",
                "오른쪽 하단": "right-bottom"
            }).name("위치").onChange(updateLogo);
            logoFolder.add(options, "ui_logo_margin").min(0).max(2).step(0.05).name("갭").onChange(updateLogo);
            logoFolder.add(options, "ui_logo_colorMode").name("단색 모드").onChange(updateMask);
            logoFolder.addColor(options, "ui_logo_color").name("로고 색상").onChange(updateMask);
            logoFolder.close();

            const infoFolder = gui.addFolder("📅 날짜 · 요일 · 시계");

            infoFolder.add(options, "ui_info_enabled").name("전체 표시").onChange(updateMask);

            const dateSubFolder = infoFolder.addFolder("📆 날짜");
            dateSubFolder.add(options, "ui_info_showDate").name("날짜 표시").onChange(updateMask);
            dateSubFolder.add(options, "ui_info_dateColorMode").name("단색 모드").onChange(updateMask);
            dateSubFolder.addColor(options, "ui_info_dateColor").name("숫자 색상").onChange(updateMask);
            dateSubFolder.addColor(options, "ui_info_dateLabelColor").name("년·월·일 색상").onChange(updateMask);
            dateSubFolder.close();

            const daySubFolder = infoFolder.addFolder("📅 요일");
            daySubFolder.add(options, "ui_info_showDay").name("요일 표시").onChange(updateMask);
            daySubFolder.add(options, "ui_day_day", {"전체":"1","축약":"2"}).name("요일 형식").onChange(() => { updateMask(); refreshDayColorGUI(); });
            daySubFolder.add(options, "ui_info_dayColorMode").name("단색 모드").onChange(() => { updateMask(); refreshDayColorGUI(); });
            var dayColorWeekCtrl    = daySubFolder.addColor(options, "ui_info_dayColor").name("월~금 색상").onChange(updateMask);
            var dayColorSatCtrl     = daySubFolder.addColor(options, "ui_info_dayColorSat").name("토 색상").onChange(updateMask);
            var dayColorSunCtrl     = daySubFolder.addColor(options, "ui_info_dayColorSun").name("일 색상").onChange(updateMask);
            var dayColorBracketCtrl = daySubFolder.addColor(options, "ui_info_dayColorBracket").name("( ) 괄호 색상").onChange(updateMask);

            function refreshDayColorGUI() {
                var isMonoOn  = options.ui_info_dayColorMode;
                var isShort   = (options.ui_day_day === "2");
                dayColorWeekCtrl.name(isShort ? "월~금 색상" : "월~금요일 색상");
                dayColorSatCtrl.name(isShort ? "토 색상" : "토요일 색상");
                dayColorSunCtrl.name(isShort ? "일 색상" : "일요일 색상");
                var allCtrls = [dayColorWeekCtrl, dayColorSatCtrl, dayColorSunCtrl, dayColorBracketCtrl];
                allCtrls.forEach(ctrl => {
                    var li = ctrl.domElement.closest("li");
                    if (li) li.style.display = "none";
                });
                if (isMonoOn) {
                    [dayColorWeekCtrl, dayColorSatCtrl, dayColorSunCtrl].forEach(ctrl => {
                        var li = ctrl.domElement.closest("li");
                        if (li) li.style.display = "";
                    });
                    if (isShort) {
                        var li = dayColorBracketCtrl.domElement.closest("li");
                        if (li) li.style.display = "";
                    }
                }
            }
            setTimeout(refreshDayColorGUI, 100);
            daySubFolder.close();

            const clockSubFolder = infoFolder.addFolder("🕐 시계");
            clockSubFolder.add(options, "ui_info_showClock").name("시계 표시").onChange(updateMask);
            clockSubFolder.add(options, "ui_clock_24HourFormat").name("24시간 형식").onChange(() => { updateTime(); updateMask(); });
            clockSubFolder.add(options, "ui_clock_dayLightSaving").min(-1).max(1).step(1).name("서머타임").onChange(() => { updateTime(); updateMask(); });
            clockSubFolder.add(options, "ui_info_clockColorMode").name("단색 모드").onChange(updateMask);
            clockSubFolder.addColor(options, "ui_info_clockColor").name("숫자 색상").onChange(updateMask);
            clockSubFolder.addColor(options, "ui_info_clockColonColor").name("콜론(:) 색상").onChange(updateMask);
            clockSubFolder.close();

            infoFolder.add(options, "ui_info_scale").min(0.1).max(5).step(0.1).name("크기").onChange(updateMask);
            infoFolder.add(options, "ui_info_lineHeight").min(1).max(10).step(0.1).name("줄 간격").onChange(updateMask);
            infoFolder.add(options, "ui_info_charSpacing").min(0).max(50).step(1).name("문자 간격 (픽셀)").onChange(updateMask);
            infoFolder.add(options, "ui_info_position", {
                "왼쪽 상단": "left-top",
                "왼쪽 중앙": "left-middle",
                "왼쪽 하단": "left-bottom",
                "중앙 상단": "center-top",
                "중앙": "center-middle",
                "중앙 하단": "center-bottom",
                "오른쪽 상단": "right-top",
                "오른쪽 중앙": "right-middle",
                "오른쪽 하단": "right-bottom"
            }).name("위치").onChange(function(val) {
                applyInfoPosition(val);
                updateMask();
            });
            infoFolder.add(options, "ui_info_margin").min(0).max(2).step(0.05).name("갭").onChange(function() {
                _recalcInfoPosition();
                updateMask();
            });
            infoFolder.close();

            const otherFolder = gui.addFolder("⚙ 기타");
            otherFolder.add(options, 'ui_other_codesCommaSeparated').name('코드 목록 (쉼표 구분)').onChange(() => {
                options.codes = makeCodes(options.ui_other_codesCommaSeparated);
                initialAnimation();
            });
            otherFolder.add(options, 'ui_other_codeProbability').min(0).max(100).step(0.1).name('코드 출현 확률 (%)');
            otherFolder.close();

            gui.add(options, "💾 설정 저장 (파일)");
            gui.add(options, "📂 설정 불러오기 (파일)");
            gui.add(options, "🔄 초기화");

            var pauseObj = { "⏸ 일시정지": function() { togglePause(pauseController); } };
            var pauseController = gui.add(pauseObj, "⏸ 일시정지");

            customContainer = document.getElementById('gui');
            customContainer.appendChild(gui.domElement);
            gui.close();

            if (params) {
                options.LoadFrom(params);
            } else {
                autoLoadSettings();
            }

            function applyAllSettings() {
                options.fpsInterval = calculateFpsInterval(options.ui_rain_matrixSpeed);
                options.trailLength = calculateTrailLength(options.ui_rain_trailLength);
                options.matrixColor = rgbToHue(options.ui_color_matrixColor);
                options.colorAnimationSpeed = calculateColorAnimationSpeed(options.ui_color_colorAnimationSpeed);
                options.codes = makeCodes(options.ui_other_codesCommaSeparated);
                updateCharSet();
                updateFont();
                updateLogo();
                applyInfoPosition(options.ui_info_position);
                updateTime();
                updateMask();
                initialAnimation();
            }

            function autoLoadSettings() {
                const xhr = new XMLHttpRequest();
                xhr.open("GET", "./settings.json", true);
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        try {
                            const preset = JSON.parse(xhr.responseText);
                            gui.load(preset);
                            Log("settings.json 설정을 자동으로 불러왔습니다.");
                        } catch(e) {
                            Log("settings.json 파싱 오류. 기본값으로 시작합니다.");
                        }
                    } else {
                        Log("settings.json 없음. 기본값으로 시작합니다.");
                    }
                    applyAllSettings();
                };
                xhr.onerror = function() {
                    Log("로컬 실행 중. 기본값으로 시작합니다.");
                    applyAllSettings();
                };
                xhr.send();
            }
        });
    }

    window.wallpaperPropertyListener = {
        applyUserProperties: function (properties) {
            if (properties.ui_rain_matrixspeed)
                options.fpsInterval = calculateFpsInterval(properties.ui_rain_matrixspeed.value);
            if (properties.ui_rain_traillength) {
                options.trailLength = calculateTrailLength(properties.ui_rain_traillength.value);
                updateMask();
            }
            if (properties.ui_rain_initialanimation)
                options.ui_rain_initialAnimation = properties.ui_rain_initialanimation.value;
            if (properties.ui_rain_dropcount)
                options.ui_rain_dropCount = properties.ui_rain_dropcount.value;
            if (properties.ui_rain_initialanimation || properties.ui_rain_dropcount)
                initialAnimation();

            if (properties.ui_color_colormode)
                options.ui_color_colorMode = properties.ui_color_colormode.value;
            if (properties.ui_color_matrixcolor)
                options.matrixColor = rgbToHue(properties.ui_color_matrixcolor.value.split(' '))
            if (properties.ui_color_coloranimationspeed)
                options.colorAnimationSpeed = calculateColorAnimationSpeed(properties.ui_color_coloranimationspeed.value);
            if (properties.ui_color_highlightfirstcharacter)
                options.ui_color_highlightFirstCharacter = properties.ui_color_highlightfirstcharacter.value;
            if (properties.ui_color_highlightmode)
                options.ui_color_highlightMode = properties.ui_color_highlightmode.value;

            let charChanged = false;
            for (let i = 1; i <= 10; i++) {
                if (properties[`ui_char_${i}_enable`]) { options[`ui_char_${i}_enable`] = properties[`ui_char_${i}_enable`].value; charChanged = true; }
                if (properties[`ui_char_${i}_double`]) { options[`ui_char_${i}_double`] = properties[`ui_char_${i}_double`].value; charChanged = true; }
                if (properties[`ui_char_${i}_text`]) { options[`ui_char_${i}_text`] = properties[`ui_char_${i}_text`].value; charChanged = true; }
            }
            if (charChanged) updateCharSet();

            if (properties.ui_font_font)
                options.ui_font_font = properties.ui_font_font.value;
            if (properties.ui_font_customFont)
                options.ui_font_customFont = properties.ui_font_customFont.value;
            if (properties.ui_font_size)
                options.ui_font_size = properties.ui_font_size.value;
            if (properties.ui_font_font || properties.ui_font_customFont || properties.ui_font_size)
                updateFont();

            if (properties.ui_logo_logo)
                options.ui_logo_logo = properties.ui_logo_logo.value;
            if (properties.ui_logo_customlogo)
                options.ui_logo_customLogo = properties.ui_logo_customlogo.value;
            if (properties.ui_logo_scale)
                options.ui_logo_scale = properties.ui_logo_scale.value;
            if (properties.ui_logo_positionx)
                options.ui_logo_position = properties.ui_logo_positionx.value;
            if (properties.ui_logo_positiony)
                options.ui_logo_margin = properties.ui_logo_positiony.value;
            if (properties.ui_logo_preservecolor)
                options.ui_logo_preserveColor = properties.ui_logo_preservecolor.value;
            if (properties.ui_logo_logo || properties.ui_logo_customlogo || properties.ui_logo_scale ||
                properties.ui_logo_positionx || properties.ui_logo_positiony || properties.ui_logo_preservecolor)
                updateLogo();

            if (properties.ui_clock_clock)
                options.ui_clock_clock = properties.ui_clock_clock.value;
            if (properties.ui_clock_24hourformat) {
                options.ui_clock_24HourFormat = properties.ui_clock_24hourformat.value;
                updateTime();
            }
            if (properties.ui_clock_daylightsaving) {
                options.ui_clock_dayLightSaving = properties.ui_clock_daylightsaving.value;
                updateTime();
            }
            if (properties.ui_clock_scale)
                options.ui_clock_scale = properties.ui_clock_scale.value;
            if (properties.ui_clock_positionx)
                options.ui_clock_positionX = properties.ui_clock_positionx.value;
            if (properties.ui_clock_positiony)
                options.ui_clock_positionY = properties.ui_clock_positiony.value;
            if (properties.ui_clock_clock || properties.ui_clock_24hourformat || properties.ui_clock_daylightsaving ||
                properties.ui_clock_scale || properties.ui_clock_positionx || properties.ui_clock_positiony)
                updateMask();

            if (properties.ui_day_day)
                options.ui_day_day = properties.ui_day_day.value;
            if (properties.ui_day_allcaps)
                options.ui_day_allCaps = properties.ui_day_allcaps.value;
            if (properties.ui_day_orientation)
                options.ui_day_orientation = properties.ui_day_orientation.value;
            if (properties.ui_day_scale)
                options.ui_day_scale = properties.ui_day_scale.value;
            if (properties.ui_day_positionx)
                options.ui_day_positionX = properties.ui_day_positionx.value;
            if (properties.ui_day_positiony)
                options.ui_day_positionY = properties.ui_day_positiony.value;
            if (properties.ui_day_day || properties.ui_day_allcaps || properties.ui_day_orientation ||
                properties.ui_day_scale || properties.ui_day_positionx || properties.ui_day_positiony)
                updateMask();
            if (properties.ui_date_monthname)
                options.ui_date_monthName = properties.ui_date_monthname.value;
            if (properties.ui_date_allcaps)
                options.ui_date_allCaps = properties.ui_date_allcaps.value;
            if (properties.ui_date_delimiter)
                options.ui_date_delimiter = properties.ui_date_delimiter.value;
            if (properties.ui_date_scale)
                options.ui_date_scale = properties.ui_date_scale.value;
            if (properties.ui_date_positionx)
                options.ui_date_positionX = properties.ui_date_positionx.value;
            if (properties.ui_date_positiony)
                options.ui_date_positionY = properties.ui_date_positiony.value;

            if (properties.ui_other_codescommaseparated) {
                options.codes = makeCodes(properties.ui_other_codescommaseparated.value);
                initialAnimation();
            }
            if (properties.ui_other_codeprobability) {
                options.ui_other_codeProbability = properties.ui_other_codeprobability.value;
            }
        }
    };

    window.SucrosePropertyListener = function (name, val) {
        if (name.startsWith("ui_char_")) {
            options[name] = val.value;
            updateCharSet();
            return;
        }
        
        switch (name) {
            case "ui_rain_matrixspeed":
                options.fpsInterval = calculateFpsInterval(val.value);
                break;
            case "ui_rain_traillength":
                options.trailLength = calculateTrailLength(val.value / 100);
                updateMask();
                break;
            case "ui_rain_initialanimation":
                options.ui_rain_initialAnimation = val.value.toString();
                initialAnimation();
                break;
            case "ui_rain_dropcount":
                options.ui_rain_dropCount = val.value;
                initialAnimation();
                break;

            case "ui_color_colormode":
                options.ui_color_colorMode = val.value.toString();
                break;
            case "ui_color_matrixcolor":
                const tmp = hexToRgb(val.value);
                options.matrixColor = rgbToHue([tmp.r, tmp.g, tmp.b])
                break;
            case "ui_color_coloranimationspeed":
                options.colorAnimationSpeed = calculateColorAnimationSpeed(val.value / 10);
                break;
            case "ui_color_highlightfirstcharacter":
                options.ui_color_highlightFirstCharacter = val.value;
                break;
            case "ui_color_highlightmode":
                options.ui_color_highlightMode = val.value.toString();
                break;

            case "ui_font_font":
                options.ui_font_font = val.value.toString();
                updateFont();
                break;
            case "ui_font_customfont":
                options.ui_font_customFont = val.value;
                updateFont();
                break;
            case "ui_font_size":
                options.ui_font_size = val.value;
                updateFont();
                break;

            case "ui_logo_logo":
                options.ui_logo_logo = val.value.toString();
                updateLogo();
                break;
            case "ui_logo_customlogo":
                options.ui_logo_customLogo = val.value;
                updateLogo();
                break;
            case "ui_logo_preservecolor":
                options.ui_logo_preserveColor = val.value;
                updateLogo();
                break;
            case "ui_logo_scale":
                options.ui_logo_scale = val.value / 10;
                updateLogo();
                break;
            case "ui_logo_positionx":
                options.ui_logo_position = val.value;
                updateLogo();
                break;
            case "ui_logo_positiony":
                options.ui_logo_margin = val.value;
                updateLogo();
                break;

            case "ui_clock_clock":
                options.ui_clock_clock = val.value.toString();
                updateMask();
                break;
            case "ui_clock_24hourformat":
                options.ui_clock_24HourFormat = val.value;
                updateTime();
                updateMask();
                break;
            case "ui_clock_daylightsaving":
                options.ui_clock_dayLightSaving = val.value;
                updateTime();
                updateMask();
                break;
            case "ui_clock_scale":
                options.ui_clock_scale = val.value;
                updateMask();
                break;
            case "ui_clock_positionx":
                options.ui_clock_positionX = val.value;
                updateMask();
                break;
            case "ui_clock_positiony":
                options.ui_clock_positionY = val.value;
                updateMask();
                break;

            case "ui_day_day":
                options.ui_day_day = val.value.toString();
                updateMask();
                break;
            case "ui_day_allcaps":
                options.ui_day_allCaps = val.value;
                updateMask();
                break;
            case "ui_day_orientation":
                options.ui_day_orientation = val.value;
                updateMask();
                break;
            case "ui_day_scale":
                options.ui_day_scale = val.value;
                updateMask();
                break;
            case "ui_day_positionx":
                options.ui_day_positionX = val.value;
                updateMask();
                break;
            case "ui_day_positiony":
                options.ui_day_positionY = val.value;
                updateMask();
                break;
            case "ui_date_monthname":
                options.ui_date_monthName = val.value;
                updateMask();
                break;
            case "ui_date_allcaps":
                options.ui_date_allCaps = val.value;
                updateMask();
                break;
            case "ui_date_delimiter":
                options.ui_date_delimiter = val.value.toString();
                updateMask();
                break;
            case "ui_date_scale":
                options.ui_date_scale = val.value;
                updateMask();
                break;
            case "ui_date_positionx":
                options.ui_date_positionX = val.value;
                updateMask();
                break;
            case "ui_date_positiony":
                options.ui_date_positionY = val.value;
                updateMask();
                break;

            case "ui_other_codescommaseparated":
                options.codes = makeCodes(val.value);
                initialAnimation();
                break;
            case "ui_other_codeprobability":
                options.ui_other_codeProbability = val.value;
                break;
        }
    };

    window.addEventListener('resize', function () {
        updateCanvasSize();
        updateGrid();
        _recalcInfoPosition();
        updateMask();
        updateFont();
        initialAnimation();
    }, false);

    let months = [
        ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        ["파르바르딘", "오르디베헤쉬트", "호르다드", "티르", "모르다드", "샤흐리바르", "메흐르", "아반", "아자르", "데이", "바흐만", "에스판드"],
        ["무하람", "사파르", "라비 알아왈", "라비 알타니", "주마다 알아왈", "주마다 알타니", "라잡", "샤반", "라마단", "샤왈", "둘카다", "둘히자"]
    ];
    let days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    let daysShort = ["일", "월", "화", "수", "목", "금", "토"];
    let fonts = [];
    var logo = null;
    var debug = document.getElementById("debug"), logs = [];
    var year = "", month = "", date = "", day = "", hour = "", minute = "";
    var startTime, now, then, elapsed, letters, columns, rows, drops, staticChars, columnSpeeds;
    var columnColors = [];
    var columnLetters = [];
    var infoColorZones = [];
    var column_frequency;
    var column_hue, row_hue;
    var font_offset_y, font_offset_x;
    var maskDom = document.getElementById("mask");
    var mask = maskDom.getContext("2d");
    var colorOverlayDom = document.getElementById("color-overlay");
    var colorOverlay = colorOverlayDom.getContext("2d");
    var infoOverlayDom = document.getElementById("info-overlay");
    var infoOverlay = infoOverlayDom.getContext("2d");
    var neoMatrixDom = document.getElementById("neo-matrix");
    var neoMatrix = neoMatrixDom.getContext("2d");

    updateCanvasSize();
    updateCharSet();
    updateTime();
    updateFont();
    applyInfoPosition(options.ui_info_position);
    startAnimating();

    if (document.fonts && document.fonts.load) {
        document.fonts.load('16px Master').then(function() {
            updateMask();
        }).catch(function() {});
    }

    function updateCanvasSize() {
        neoMatrixDom.height = window.innerHeight;
        neoMatrixDom.width = window.innerWidth;
        maskDom.height = window.innerHeight;
        maskDom.width = window.innerWidth;
        colorOverlayDom.height = window.innerHeight;
        colorOverlayDom.width = window.innerWidth;
        infoOverlayDom.height = window.innerHeight;
        infoOverlayDom.width = window.innerWidth;
    }

    function updateLogo() {
        logo = new Image();
        logo.onload = updateMask;

        switch (options.ui_logo_logo) {
            case "0": {
                logo = null;
                updateMask();
                break;
            }
            case "1": {
                logo.src = options.ui_logo_customLogo;
                break;
            }

        }
    }

    setInterval(() => {
        updateTime();
        updateMask();
    }, 60000);

    function updateTime() {
        var today = new Date();
        today.setHours(today.getHours() + parseInt(options.ui_clock_dayLightSaving));

        var today2 = new Date();
        year = today2.getFullYear();
        month = today2.getMonth() + 1;
        date = today2.getDate();

        day = today.getDay();
        hour = today.getHours();
        minute = today.getMinutes();

        if (!options.ui_clock_24HourFormat && hour > 12) {
            hour = hour % 12;
            if (hour == 0)
                hour = 12;
        }
        if (hour < 10)
            hour = "0" + hour;
        if (minute < 10)
            minute = "0" + minute;

        hour = hour.toString();
        minute = minute.toString();
    }

    function updateMask() {
        clearStaticChars();

        mask.globalCompositeOperation = 'source-over';
        mask.clearRect(0, 0, neoMatrixDom.width, neoMatrixDom.height);
        mask.fillStyle = "rgba(0, 0, 0, " + options.trailLength + ")";
        mask.fillRect(0, 0, neoMatrixDom.width, neoMatrixDom.height);

        mask.globalCompositeOperation = 'destination-out';
        infoColorZones = [];

        if (logo) {
            let logo_width = (neoMatrixDom.height / 2) * (logo.width / logo.height) * options.ui_logo_scale;
            let logo_height = (neoMatrixDom.height / 2) * options.ui_logo_scale;

            var logoParts = (options.ui_logo_position || "center-middle").split("-");
            var logoHAlign = logoParts[0];
            var logoVAlign = logoParts[1];
            var logoMarginPx = (options.ui_font_size || 15) * 5 * (parseFloat(options.ui_logo_margin) || 0);
            var logoX, logoY;
            switch (logoHAlign) {
                case "left":  logoX = logoMarginPx; break;
                case "right": logoX = neoMatrixDom.width - logo_width - logoMarginPx; break;
                default:      logoX = neoMatrixDom.width / 2 - logo_width / 2; break;
            }
            switch (logoVAlign) {
                case "top":    logoY = logoMarginPx; break;
                case "bottom": logoY = neoMatrixDom.height - logo_height - logoMarginPx; break;
                default:       logoY = neoMatrixDom.height / 2 - logo_height / 2; break;
            }

            mask.drawImage(logo, logoX, logoY, logo_width, logo_height);

            colorOverlay.clearRect(0, 0, neoMatrixDom.width, neoMatrixDom.height);
            colorOverlay.drawImage(logo, logoX, logoY, logo_width, logo_height);

            if (options.ui_logo_colorMode && !options.ui_logo_preserveColor) {
                var logoColorArr = options.ui_logo_color;
                var logoColorStr;
                if (Array.isArray(logoColorArr)) {
                    logoColorStr = "rgb(" + Math.round(logoColorArr[0]*255) + "," + Math.round(logoColorArr[1]*255) + "," + Math.round(logoColorArr[2]*255) + ")";
                } else {
                    logoColorStr = "rgb(" + Math.round(logoColorArr.r*255) + "," + Math.round(logoColorArr.g*255) + "," + Math.round(logoColorArr.b*255) + ")";
                }
                infoColorZones.push({ x: logoX, y: logoY, w: logo_width, h: logo_height, color: logoColorStr });
            }
        }

        if (options.ui_info_enabled) {
            var lines = [];
            function colorVal(arr) {
                if (Array.isArray(arr)) {
                    return "rgb(" + Math.round(arr[0]*255) + "," + Math.round(arr[1]*255) + "," + Math.round(arr[2]*255) + ")";
                }
                return "rgb(" + Math.round(arr.r*255) + "," + Math.round(arr.g*255) + "," + Math.round(arr.b*255) + ")";
            }
            var isShortDay = (options.ui_info_showDay && options.ui_day_day == "2");

            if (options.ui_info_showDate) {
                var dd = date.toString().padStart(2, "0");
                var mm = month.toString().padStart(2, "0");
                var yy4 = year.toString();
                var dateNumColor = options.ui_info_dateColorMode ? colorVal(options.ui_info_dateColor) : null;
                var dateLblColor = options.ui_info_dateColorMode ? colorVal(options.ui_info_dateLabelColor) : null;
                function makeDateSegments(numStr, lblStr) {
                    return [
                        {text: numStr, color: dateNumColor},
                        {text: lblStr, color: dateLblColor}
                    ];
                }
                lines.push({segments: makeDateSegments(yy4, "년")});
                lines.push({segments: [
                    {text: mm, color: dateNumColor},
                    {text: "월 ", color: dateLblColor},
                    {text: dd, color: dateNumColor},
                    {text: "일", color: dateLblColor}
                ]});
            }

            function getDayAutoColor(dayIdx) {
                if (dayIdx === 0) return "rgb(255,50,50)";
                if (dayIdx === 6) return "rgb(80,160,255)";
                return "rgb(255,255,255)";
            }

            function getDayMonoColor(dayIdx) {
                if (dayIdx === 0) return colorVal(options.ui_info_dayColorSun);
                if (dayIdx === 6) return colorVal(options.ui_info_dayColorSat);
                return colorVal(options.ui_info_dayColor);
            }

            if (isShortDay) {
                var shortDayText = daysShort[day];
                var clockNumColor   = options.ui_info_clockColorMode ? colorVal(options.ui_info_clockColor)      : null;
                var clockColonColor = options.ui_info_clockColorMode ? colorVal(options.ui_info_clockColonColor) : null;

                if (options.ui_info_dayColorMode) {
                    var bracketColor = colorVal(options.ui_info_dayColorBracket);
                    var textColor    = getDayMonoColor(day);
                    if (options.ui_info_showClock) {
                        lines.push({segments: [
                            {text: "(", color: bracketColor},
                            {text: shortDayText, color: textColor},
                            {text: ") ", color: bracketColor},
                            {text: hour,   color: clockNumColor},
                            {text: ":",    color: clockColonColor},
                            {text: minute, color: clockNumColor}
                        ]});
                    } else {
                        lines.push({segments: [
                            {text: "(", color: bracketColor},
                            {text: shortDayText, color: textColor},
                            {text: ")", color: bracketColor}
                        ]});
                    }
                } else {
                    var dayColor = getDayAutoColor(day);
                    if (options.ui_info_showClock) {
                        lines.push({segments: [
                            {text: "(" + shortDayText + ") ", color: dayColor},
                            {text: hour,   color: clockNumColor},
                            {text: ":",    color: clockColonColor},
                            {text: minute, color: clockNumColor}
                        ]});
                    } else {
                        lines.push({text: "(" + shortDayText + ")", color: dayColor});
                    }
                }
            } else {
                if (options.ui_info_showDay) {
                    var dayColor = options.ui_info_dayColorMode ? getDayMonoColor(day) : getDayAutoColor(day);
                    lines.push({text: days[day], color: dayColor});
                }
                if (options.ui_info_showClock) {
                    var clockNumColor   = options.ui_info_clockColorMode ? colorVal(options.ui_info_clockColor)      : null;
                    var clockColonColor = options.ui_info_clockColorMode ? colorVal(options.ui_info_clockColonColor) : null;
                    lines.push({segments: [
                        {text: hour,   color: clockNumColor},
                        {text: ":",    color: clockColonColor},
                        {text: minute, color: clockNumColor}
                    ]});
                }
            }

            if (lines.length > 0) {
                var scale    = parseFloat(options.ui_info_scale) || 1;
                var px       = parseInt(options.ui_info_positionX) || 0;
                var py       = parseInt(options.ui_info_positionY) || 0;
                var fontSize = options.ui_font_size;
                var lineHpx  = fontSize * options.ui_info_lineHeight * scale;
                var blockHpx = lines.length * lineHpx;

                mask.font = fontSize * 5 * scale + "px " + getCurrentInfoFontName();
                mask.fillStyle = "#FFF";

                var _charSpacing = parseInt(options.ui_info_charSpacing) || 0;
                var _spacerW = _charSpacing;

                function measureLineWidth(line) {
                    var allChars = [];
                    if (line.segments) {
                        for (var _si = 0; _si < line.segments.length; _si++) {
                            var _chars = Array.from(line.segments[_si].text);
                            for (var _ci = 0; _ci < _chars.length; _ci++) allChars.push(_chars[_ci]);
                        }
                    } else {
                        allChars = Array.from(line.text);
                    }
                    var _w = 0;
                    for (var _k = 0; _k < allChars.length; _k++) {
                        _w += mask.measureText(allChars[_k]).width;
                        if (_charSpacing > 0 && _k < allChars.length - 1) _w += _spacerW;
                    }
                    return _w;
                }

                var lineWidths = [];
                var blockWpx = 0;
                for (var li = 0; li < lines.length; li++) {
                    var w = measureLineWidth(lines[li]);
                    lineWidths.push(w);
                    if (w > blockWpx) blockWpx = w;
                }

                var canvasW = neoMatrixDom.width;
                var canvasH = neoMatrixDom.height;

                if (!options._infoHRef) _recalcInfoPosition();

                var marginPx = options._infoMarginPx || (textPxForY * 0.05);
                var textPxForY = fontSize * 5 * scale;
                var blockOriginX, blockOriginY;

                switch (options._infoHRef) {
                    case "left":
                        blockOriginX = marginPx;
                        break;
                    case "right":
                        blockOriginX = canvasW - blockWpx - marginPx;
                        break;
                    default:
                        blockOriginX = (canvasW - blockWpx) / 2;
                        break;
                }

                var lastLineBottom = (lines.length - 1) * lineHpx + textPxForY;
                switch (options._infoVRef) {
                    case "top":
                        blockOriginY = marginPx;
                        break;
                    case "bottom":
                        blockOriginY = canvasH - marginPx - lastLineBottom;
                        break;
                    default:
                        blockOriginY = (canvasH - lastLineBottom) / 2;
                        break;
                }

                var hasInfoColor = lines.some(function(l) { return l.color !== null; });

                infoOverlay.clearRect(0, 0, neoMatrixDom.width, neoMatrixDom.height);

                for (var li = 0; li < lines.length; li++) {
                    var lineWpx = lineWidths[li];

                    var lineOffsetX;
                    switch (options.ui_info_align) {
                        case "0": lineOffsetX = 0; break;
                        case "2": lineOffsetX = blockWpx - lineWpx; break;
                        default:  lineOffsetX = (blockWpx - lineWpx) / 2; break;
                    }

                    var drawX = blockOriginX + lineOffsetX;
                    var textPx_local = fontSize * 5 * scale;
                    var drawY = blockOriginY + li * lineHpx;

                    mask.font = fontSize * 5 * scale + "px " + getCurrentInfoFontName();
                    mask.textBaseline = "top";
                    mask.fillStyle = "#FFF";
                    var textH = fontSize * 5 * scale;

                    var charSpacing = parseInt(options.ui_info_charSpacing) || 0;
                    var spacerW = charSpacing;

                    if (lines[li].segments) {
                        var segX = drawX;
                        for (var si = 0; si < lines[li].segments.length; si++) {
                            var seg = lines[li].segments[si];
                            var chars = Array.from(seg.text);
                            for (var ci = 0; ci < chars.length; ci++) {
                                var ch = chars[ci];
                                mask.fillText(ch, segX, drawY);
                                var tm = mask.measureText(ch);
                                var chW = tm.width;
                                if (seg.color) {
                                    var zY = drawY;
                                    var zH = textH;
                                    if (tm.actualBoundingBoxAscent !== undefined && tm.actualBoundingBoxDescent !== undefined) {
                                        zY = drawY - tm.actualBoundingBoxAscent;
                                        zH = tm.actualBoundingBoxAscent + tm.actualBoundingBoxDescent;
                                    }
                                    infoColorZones.push({
                                        x: segX,
                                        y: zY,
                                        w: chW,
                                        h: zH,
                                        color: seg.color
                                    });
                                }
                                segX += chW;
                                var isLastCharInSeg = (ci === chars.length - 1);
                                var isLastSeg = (si === lines[li].segments.length - 1);
                                if (charSpacing > 0 && !(isLastCharInSeg && isLastSeg)) {
                                    segX += spacerW;
                                }
                            }
                        }
                    } else {
                        var chars = Array.from(lines[li].text);
                        var segX = drawX;
                        for (var ci = 0; ci < chars.length; ci++) {
                            var ch = chars[ci];
                            mask.fillText(ch, segX, drawY);
                            var tm = mask.measureText(ch);
                            var chW = tm.width;
                            if (lines[li].color) {
                                var zY = drawY;
                                var zH = textH;
                                if (tm.actualBoundingBoxAscent !== undefined && tm.actualBoundingBoxDescent !== undefined) {
                                    zY = drawY - tm.actualBoundingBoxAscent;
                                    zH = tm.actualBoundingBoxAscent + tm.actualBoundingBoxDescent;
                                }
                                infoColorZones.push({
                                    x: segX,
                                    y: zY,
                                    w: chW,
                                    h: zH,
                                    color: lines[li].color
                                });
                            }
                            segX += chW;
                            if (charSpacing > 0 && ci < chars.length - 1) {
                                segX += spacerW;
                            }
                        }
                    }
                }
            }
        }

    }

    function drawTextOnMatrix(text, x, y) {
        mask.fillStyle = "#FFF";
        lines = text.split("\\n");

        let cc = getCharsCount(text);

        x = clamp(0, columns - cc[0], x);
        y = clamp(0, rows - cc[1], y);

        for (let i = 0; i < lines.length; i++) {

            let sections = lines[i].split(" "), currentCharIndex = 0;
            for (let j = 0; j < sections.length; j++) {
                if (sections[j].length > 0)
                    mask.fillRect((x + currentCharIndex) * options.ui_font_size - font_offset_x, (y + i) * options.ui_font_size + font_offset_y, sections[j].length * options.ui_font_size, options.ui_font_size);
                currentCharIndex += sections[j].length + 1;
            }

            for (let j = 0; j < lines[i].length; j++)
                staticChars[x + j][y + i + 1] = lines[i][j] != " " ? lines[i][j] : null;
        }
    }

    function drawTextOnMask(text, x, y, scale) {
        mask.font = options.ui_font_size * 5 * scale + "px " + getCurrentFontName();
        mask.fillStyle = "#FFF";
        lines = text.split("\\n");

        for (let i = 0; i < lines.length; i++)
            mask.fillText(lines[i], options.ui_font_size * x - font_offset_x, options.ui_font_size * (y + ((6 * (i + 1)) - 1) * scale) + font_offset_y);
    }

    function drawTextOnMaskLine(text, lineX, lineY, scale) {
        mask.font = options.ui_font_size * 5 * scale + "px " + getCurrentFontName();
        mask.fillStyle = "#FFF";
        mask.fillText(text, options.ui_font_size * lineX - font_offset_x, options.ui_font_size * (lineY + (6 - 1) * scale) + font_offset_y);
    }

    function getTextBoundingBox(text, scale) {
        let cc = getCharsCount(text);
        return [(cc[0] * 4 - 1) * scale, (cc[1] * 6 - 1) * scale];
    }

    function getCharsCount(text) {
        lines = text.split("\\n");
        var maxChars = 0;
        for (let i = 0; i < lines.length; i++)
            if (lines[i].length > maxChars)
                maxChars = lines[i].length;
        return [maxChars, lines.length];
    }

    function drawMask() {
        neoMatrix.globalCompositeOperation = 'source-over';
        neoMatrix.drawImage(maskDom, 0, 0);

        if (logo && options.ui_logo_preserveColor) {
            neoMatrix.globalCompositeOperation = 'source-atop';
            neoMatrix.drawImage(colorOverlayDom, 0, 0);
            neoMatrix.globalCompositeOperation = 'source-over';
        }
    }

    var _enabledSetsPool = [["0","1"]];

    function updateCharSet() {
        let enabledSets = [];
        for (let i = 1; i <= 10; i++) {
            if (options[`ui_char_${i}_enable`]) {
                let chars = options[`ui_char_${i}_text`].split("");
                if (chars.length === 0) continue;
                enabledSets.push(chars);
                if (options[`ui_char_${i}_double`]) {
                    enabledSets.push(chars);
                }
            }
        }

        if (enabledSets.length === 0) {
            enabledSets = [["0","1"]];
        }

        _enabledSetsPool = enabledSets;

        let combined = [];
        for (let s of enabledSets) combined = combined.concat(s);
        letters = combined;

        assignColumnSets(enabledSets);
    }

    function assignColumnSets(enabledSets) {
        columnLetters = [];
        if (!columns) return;
        for (let i = 0; i < columns; i++) {
            var set = enabledSets[Math.floor(Math.random() * enabledSets.length)];
            columnLetters[i] = set;
        }
    }

    function reassignColumnSet(colIndex) {
        if (_enabledSetsPool.length === 0) return;
        columnLetters[colIndex] = _enabledSetsPool[Math.floor(Math.random() * _enabledSetsPool.length)];
    }

    function getCurrentFontName() {
        if (options.ui_font_customFont && options.ui_font_customFont !== "Master" && options.ui_font_customFont !== "monospace") {
            return options.ui_font_customFont;
        }
        return "Master";
    }

    function getCurrentInfoFontName() {
        return getCurrentFontName();
    }

    function applyInfoPosition(preset) {
        options._infoPreset = preset || "center-middle";
        _recalcInfoPosition();
    }

    function _recalcInfoPosition() {
        var preset = options._infoPreset || "center-middle";
        var canvasW = (neoMatrixDom && neoMatrixDom.width)  ? neoMatrixDom.width  : window.innerWidth;
        var canvasH = (neoMatrixDom && neoMatrixDom.height) ? neoMatrixDom.height : window.innerHeight;
        var fontSize = options.ui_font_size || 15;
        var scale    = parseFloat(options.ui_info_scale) || 1;
        var textPx   = fontSize * 5 * scale;
        var marginRatio = parseFloat(options.ui_info_margin) || 0;
        var marginPx = textPx * marginRatio;

        var parts   = preset.split("-");
        var hAlign  = parts[0];
        var vAlign  = parts[1];

        switch (hAlign) {
            case "left":  options.ui_info_align = "0"; break;
            case "right": options.ui_info_align = "2"; break;
            default:      options.ui_info_align = "1"; break;
        }

        options._infoHRef = hAlign;
        options._infoVRef = vAlign;
        options._infoMarginPx = marginPx;
    }

    function updateFont() {
        neoMatrix.font = options.ui_font_size + "px " + getCurrentFontName();
        font_offset_y = options.ui_font_size / 8;
        font_offset_x = options.ui_font_size / 16;

        updateGrid();
        updateMask();
        initialAnimation();
    }

    function updateGrid() {
        columns = Math.floor(neoMatrixDom.width / options.ui_font_size);
        rows = Math.floor(neoMatrixDom.height / options.ui_font_size);
        column_hue = Math.floor(360 / columns);
        row_hue = Math.floor(360 / rows);
        clearStaticChars();
        updateCharSet();
    }

    function clearStaticChars() {
        staticChars = [];
        for (let i = 0; i < columns; i++) {
            staticChars[i] = [];
            for (let j = 0; j < rows; j++)
                staticChars[i][j] = null;
        }
    }

    function randomColumnSpeed() {
        var minSpeed = Math.min(options.ui_rain_matrixSpeed, options.ui_rain_speedVariance);
        var maxSpeed = Math.max(options.ui_rain_matrixSpeed, options.ui_rain_speedVariance);
        var range = maxSpeed - minSpeed;
        if (range === 0) return minSpeed;

        var segments = [
            [0.00, 0.05, 5],
            [0.95, 1.00, 5],
            [0.05, 0.20, 15],
            [0.80, 0.95, 15],
            [0.20, 0.35, 15],
            [0.65, 0.80, 15],
            [0.35, 0.65, 30],
        ];
        var totalWeight = segments.reduce(function(s, seg) { return s + seg[2]; }, 0);
        var r = Math.random() * totalWeight;
        var cumulative = 0;
        for (var si = 0; si < segments.length; si++) {
            cumulative += segments[si][2];
            if (r <= cumulative) {
                var lo = minSpeed + segments[si][0] * range;
                var hi = minSpeed + segments[si][1] * range;
                return lo + Math.random() * (hi - lo);
            }
        }
        return minSpeed + Math.random() * range;
    }

    function randomColumnColor(colIndex) {
        var minDist = 40;
        var maxAttempts = 30;
        for (var attempt = 0; attempt < maxAttempts; attempt++) {
            var hue = Math.floor(Math.random() * 360);
            var tooClose = false;
            for (var n = Math.max(0, colIndex - 3); n < colIndex; n++) {
                var diff = Math.abs(hue - columnColors[n]);
                if (diff > 180) diff = 360 - diff;
                if (diff < minDist) { tooClose = true; break; }
            }
            if (!tooClose) return hue;
        }
        return (columnColors[colIndex - 1] + 180) % 360;
    }

    function getEffectiveDropCount(colIndex) {
        var dc = options.ui_rain_dropCount;
        if (dc >= 1) return Math.round(dc);
        return (Math.random() < dc) ? 1 : 0;
    }

    function initialAnimation() {
        drops = [];
        columnSpeeds = [];
        columnColors = [];
        columnLetters = [];
        columnThen = [];
        var nowMs = Date.now();
        for (var ci = 0; ci < columns; ci++) {
            columnSpeeds[ci] = randomColumnSpeed();
            columnColors[ci] = randomColumnColor(ci);
            columnThen[ci] = nowMs;
        }
        updateCharSet();

        switch (options.ui_rain_initialAnimation) {
            case "0": {
                for (var i = 0; i < columns; i++) {
                    drops[i] = [];
                    var _dc0 = getEffectiveDropCount(i);
                    for (var j = 0; j < _dc0; j++)
                        drops[i][j] = [rows + 1, 0, 0, "", 0];
                }
                break;
            }
            case "1": {
                for (var i = 0; i < columns; i++) {
                    drops[i] = [];
                    var _dc1 = getEffectiveDropCount(i);
                    if (_dc1 > 0) {
                        drops[i][0] = [1, 0, 0, "", 0];
                        for (var j = 1; j < _dc1; j++)
                            drops[i][j] = [rows + 1, 0, 0, "", 0];
                    }
                }
                break;
            }
            case "2": {
                for (var i = 0; i < columns; i++) {
                    drops[i] = [];
                    var _dc2 = getEffectiveDropCount(i);
                    for (var j = 0; j < _dc2; j++)
                        drops[i][j] = [Math.floor(Math.random() * rows), 0, 0, "", 0];
                }
                break;
            }
        }
    }

    function startAnimating() {
        then = Date.now();
        startTime = then;
        columnThen = [];
        loop();
    }

    var columnThen = [];
    var isPaused = false;

    function togglePause(controller) {
        isPaused = !isPaused;
        if (controller) controller.name(isPaused ? "▶ 재생" : "⏸ 일시정지");
        if (!isPaused) {
            var t = Date.now();
            for (var ci = 0; ci < columnThen.length; ci++) columnThen[ci] = t;
        }
    }

    function loop() {
        window.requestAnimationFrame(loop);
        if (isPaused) return;
        now = Date.now();
        elapsed = now - then;
        if (elapsed > 16) {
            then = now - (elapsed % 16);
            drawMatrix();
        }
    }

    function drawMatrix() {
        drawMask();

        var isSpeedMode = options.ui_color_highlightMode === "1" && options.ui_color_highlightFirstCharacter;

        for (var i = 0; i < drops.length; i++) {
            var colInterval = calculateFpsInterval(columnSpeeds[i] || options.ui_rain_matrixSpeed);
            if (!columnThen[i]) columnThen[i] = now;
            if ((now - columnThen[i]) < colInterval) continue;
            columnThen[i] = now;

            var probability = 0.975;
            var lightness = 50;

            var dc = options.ui_rain_dropCount;
            if (dc < 1 && drops[i].length === 0) {
                if (Math.random() < dc * 0.02) {
                    drops[i][0] = [0, 0, 0, "", 0];
                }
            }

            var newDrop = true;
            for (var j = 0; j < drops[i].length; j++) {
                var character = calculateCharacter(drops[i][j], i);
                var isCodeChar = drops[i][j][1] != 0;

                if (drops[i][j][1] > 0)
                    lightness = 100;

                if (options.ui_color_highlightFirstCharacter) {
                    neoMatrix.clearRect(i * options.ui_font_size - font_offset_x, ((drops[i][j][0] - 2) * options.ui_font_size) + font_offset_y, options.ui_font_size, options.ui_font_size);

                    var tmp = drops[i][j][0] - 1;
                    neoMatrix.fillStyle = calculateColor(i, tmp, drops[i][j][4]);
                    neoMatrix.fillText(drops[i][j][3], i * options.ui_font_size, tmp * options.ui_font_size);

                    neoMatrix.fillStyle = "#FFF";
                }
                else if (isCodeChar)
                    neoMatrix.fillStyle = "#FFFFFF";
                else
                    neoMatrix.fillStyle = calculateColor(i, drops[i][j][0], lightness);

                neoMatrix.clearRect(i * options.ui_font_size - font_offset_x, ((drops[i][j][0] - 1) * options.ui_font_size) + font_offset_y, options.ui_font_size, options.ui_font_size);
                drops[i][j][3] = character;
                drops[i][j][4] = lightness;

                if (isSpeedMode && !isCodeChar && options.ui_color_highlightFirstCharacter) {
                    var speedStr = String(Math.round(columnSpeeds[i] || options.ui_rain_matrixSpeed));
                    for (var d = 0; d < speedStr.length; d++) {
                        var digitRow = drops[i][j][0] + d;
                        if (digitRow !== drops[i][j][0]) {
                            neoMatrix.clearRect(i * options.ui_font_size - font_offset_x, ((digitRow - 1) * options.ui_font_size) + font_offset_y, options.ui_font_size, options.ui_font_size);
                        }
                        neoMatrix.fillText(speedStr[d], i * options.ui_font_size, digitRow * options.ui_font_size);
                    }
                } else {
                    neoMatrix.fillText(character, i * options.ui_font_size, drops[i][j][0] * options.ui_font_size);
                }

                if (drops[i][j][0] > rows && Math.random() > probability && newDrop) {
                    columnSpeeds[i] = randomColumnSpeed();
                    columnColors[i] = randomColumnColor(i);
                    reassignColumnSet(i);
                    newDrop = false;
                    if (dc < 1 && Math.random() >= dc) {
                        drops[i].splice(j, 1);
                        j--;
                    } else {
                        drops[i][j] = [0, 0, 0, "", 0];
                    }
                }
                drops[i][j][0]++;
            }
        }
    }

    function calculateCharacter(dropItem, column) {
        if (staticChars[column][dropItem[0]])
            return staticChars[column][dropItem[0]];

        if (Math.random() < (options.ui_other_codeProbability / 100) && dropItem[1] == 0) {
            dropItem[1] = Math.floor(Math.random() * options.codes.length) + 1;
            dropItem[2] = dropItem[0];
        }

        if (dropItem[1] != 0) {
            var codeCharIndex = dropItem[0] - dropItem[2];
            if (codeCharIndex < options.codes[dropItem[1] - 1].length)
                return options.codes[dropItem[1] - 1][codeCharIndex];
            dropItem[1] = 0;
            dropItem[2] = 0;
        }

        return (columnLetters[column] || letters)[Math.floor(Math.random() * (columnLetters[column] || letters).length)];
    }

    function calculateColor(i, j, lightness) {
        var hue, offset = Math.floor(options.colorAnimationSpeed * then);

        if (infoColorZones.length > 0) {
            var charLeft = i * options.ui_font_size - font_offset_x;
            var charTop = ((j - 1) * options.ui_font_size) + font_offset_y;
            var charRight = charLeft + options.ui_font_size;
            var charBottom = charTop + options.ui_font_size;

            for (var z = 0; z < infoColorZones.length; z++) {
                var zone = infoColorZones[z];
                if (charLeft < zone.x + zone.w &&
                    charRight > zone.x &&
                    charTop < zone.y + zone.h &&
                    charBottom > zone.y) {
                    return zone.color;
                }
            }
        }

        switch (options.ui_color_colorMode) {
            case "1": {
                hue = offset * row_hue;
                break;
            }
            case "2": {
                hue = (j + offset) * row_hue;
                break;
            }
            case "3": {
                hue = (i + offset) * column_hue;
                break;
            }
            case "4": {
                hue = columnColors[i] !== undefined ? columnColors[i] : (i * column_hue);
                break;
            }
            default: {
                hue = options.matrixColor;
                break;
            }
        }

        return "hsl(" + hue + ", 100%, " + lightness + "%)";;
    }

    function calculateFpsInterval(fps) {
        return 1000 / fps;
    }

    function calculateTrailLength(value) {
        return map(value, 0.0, 1.0, 0.35, 0.02);
    }

    function calculateColorAnimationSpeed(value) {
        return map(value, -1, 1, 0.05, -0.05);
    }

    function makeCodes(codesText) {
        if(codesText.includes(",")) return codesText.split(",");
        return codesText.split("");
    }

    function Log(text) {
        debug.classList.remove("hide");
        void debug.offsetWidth;
        logs.push(text);
        if (logs.length > 10)
            logs.splice(0, 1);
        var tmp = "";
        logs.forEach(l => { tmp += l + "\n" });
        debug.innerText = tmp;
        debug.classList.add("hide");
    }

    function rgbToHue(color) {
        let r = color[0], g = color[1], b = color[2];
        if (r > 1 || g > 1 || b > 1) {
            return rgbToHsl(Math.round(r), Math.round(g), Math.round(b))[0] * 360;
        }
        return rgbToHsl(Math.ceil(r * 255), Math.ceil(g * 255), Math.ceil(b * 255))[0] * 360;
    }

    function hexToRgb(hex) {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[2], 16),
            g: parseInt(result[3], 16),
            b: parseInt(result[4], 16)
        } : null;
    }

    function rgbToHsl(r, g, b) {
        r /= 255, g /= 255, b /= 255;

        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;

        if (max == min) {
            h = s = 0;
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }

            h /= 6;
        }

        return [h, s, l];
    }

    function map(value, from_a, from_b, to_a, to_b) {
        return (((value - from_a) * (to_b - to_a)) / (from_b - from_a)) + to_a;
    }

    function clamp(min, max, value) {
        if (value < min)
            return min;
        if (value > max)
            return max;
        return value;
    }

    function optionsToDict(options) {
        return options.reduce((acc, option) => {
            acc[option.label] = option.value;
            return acc;
        }, {});
    }

    function paramsToUrl(urlParams, paramDefaults, filter) {
        var defaults = new URLSearchParams(paramDefaults)
        var params = new URLSearchParams(urlParams)

        filter.forEach(key => {
            params.delete(key);
            defaults.delete(key);
        });

        defaults.forEach((value, key) => {
            if (params.get(key) === value)
                params.delete(key);
        });

        return window.location.origin + window.location.pathname + "?" + params.toString();
    }

    function copyToClipboard(text) {
        const el = document.createElement('textarea');
        el.value = text;
        el.setAttribute('readonly', '');
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    function getUrlParams() {
        urlParams = new URLSearchParams(window.location.search);
        if (urlParams.size == 0)
            return null;

        params = {};
        for (const [key, value] of urlParams)
            params[key] = value;

        return params;
    }
};