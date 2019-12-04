var titleData = '';
asd();
function asd(params) {
    $.ajax({
        url: 'http://localhost:8088/backsystem/rest/screen/getScreenOperField',
        type: 'post',
        dataType: 'json',
        headers: {
            'Content-type': 'application/json',
            'Accept': '*/*'
        },
        data: JSON.stringify({
            columnType: '0'
        }),
    }).always(function (data) {
        if (data.code == '200') {
            console.log(data);
            titleData = data.data.rows;
            var innerHTML = '';
            for (var a = 0; a < data.data.rows.length; a++) {
                innerHTML += '<div style="width:20%;">' + data.data.rows[a].colunmName + '</div>';
            }
            $('.ListBack').html(innerHTML);
            // $('.botomContent').animate({
            //     right: "-100px",
            // });
        } else {
            alert('获取数据失败');
        }
    });
}
var firstFun = true;
content();
function content() {
    $.ajax({
        url: 'http://localhost:8088/backsystem/rest/screen/getScreenData',
        type: 'post',
        dataType: 'json',
        headers: {
            'Content-type': 'application/json',
            'Accept': '*/*'
        },
        // data: JSON.stringify({
        //     columnType: '0'
        // }),
    }).always(function (data) {
        if (data.code == '200') {
            // console.log(data);
            var pageNum = 1; //当前显示页数
            var showNum = 4; //当前页数显示几条数据
            var pageTotal = Math.ceil(data.data.rows.length / showNum); //总页数
            // console.log(pageTotal)
            // console.log(data.data.rows.length)
            data.data.rows = [{
                "PATIENT_ID": "4714439",
                "VISIT_ID": "1",
                "SCHEDULE_ID": "69662049",
                "NAME": "王大英",
                "SEX": "女",
                "INP_NO": "547693",
                "DATE_OF_BIRTH": -954921600000,
                "NATION": "汉族",
                "DEPT_STAYED": "内分泌科",
                "BED_NO": "2",
                "SCHEDULED_DATE_TIME": 1575247920000,
                "OPERATING_ROOM": "171",
                "OPERATING_ROOM_NO": "01",
                "BED_LABEL": null,
                "SEQUENCE": 1,
                "DIAG_BEFORE_OPERATION": null,
                "PATIENT_CONDITION": null,
                "OPERATION_NAME": null,
                "OPERATION_SCALE": null,
                "OPERATING_DEPT": "内分泌科",
                "SURGEON": "王凤芝",
                "FIRST_ASSISTANT": null,
                "SECOND_ASSISTANT": null,
                "THIRD_ASSISTANT": null,
                "FOURTH_ASSISTANT": null,
                "ANESTHESIA_METHOD": "神经阻滞麻醉",
                "ANESTHESIA_DOCTOR": "陈施德",
                "ANESTHESIA_ASSISTANT": "卿翠华",
                "SECOND_ANESTHESIA_DOCTOR": null,
                "THIRD_ANESTHESIA_DOCTOR": null,
                "FOURTH_ANESTHESIA_ASSISTANT": null,
                "FIRST_OPERATION_NURSE": null,
                "SECOND_OPERATION_NURSE": null,
                "FIRST_SUPPLY_NURSE": null,
                "SECOND_SUPPLY_NURSE": null,
                "THIRD_SUPPLY_NURSE": null,
                "NOTES_ON_OPERATION": null,
                "REQ_DATE_TIME": 1575216000000,
                "EMERGENCY_IND": 0,
                "ISOLATION_IND": 1,
                "RADIATE_IND": 1,
                "INFECTED_IND": 1,
                "OPERATION_POSITION": null,
                "TYPE": "术前",
                "OPER_STATUS": 0,
                "PAT_AGE": 80
            },
            {
                "PATIENT_ID": "4714439",
                "VISIT_ID": "1",
                "SCHEDULE_ID": "69662049",
                "NAME": "王大英",
                "SEX": "女",
                "INP_NO": "547693",
                "DATE_OF_BIRTH": -954921600000,
                "NATION": "汉族",
                "DEPT_STAYED": "内分泌科",
                "BED_NO": "2",
                "SCHEDULED_DATE_TIME": 1575247920000,
                "OPERATING_ROOM": "171",
                "OPERATING_ROOM_NO": "01",
                "BED_LABEL": null,
                "SEQUENCE": 1,
                "DIAG_BEFORE_OPERATION": null,
                "PATIENT_CONDITION": null,
                "OPERATION_NAME": null,
                "OPERATION_SCALE": null,
                "OPERATING_DEPT": "内分泌科",
                "SURGEON": "王凤芝",
                "FIRST_ASSISTANT": null,
                "SECOND_ASSISTANT": null,
                "THIRD_ASSISTANT": null,
                "FOURTH_ASSISTANT": null,
                "ANESTHESIA_METHOD": "神经阻滞麻醉",
                "ANESTHESIA_DOCTOR": "陈施德",
                "ANESTHESIA_ASSISTANT": "卿翠华",
                "SECOND_ANESTHESIA_DOCTOR": null,
                "THIRD_ANESTHESIA_DOCTOR": null,
                "FOURTH_ANESTHESIA_ASSISTANT": null,
                "FIRST_OPERATION_NURSE": null,
                "SECOND_OPERATION_NURSE": null,
                "FIRST_SUPPLY_NURSE": null,
                "SECOND_SUPPLY_NURSE": null,
                "THIRD_SUPPLY_NURSE": null,
                "NOTES_ON_OPERATION": null,
                "REQ_DATE_TIME": 1575216000000,
                "EMERGENCY_IND": 0,
                "ISOLATION_IND": 1,
                "RADIATE_IND": 1,
                "INFECTED_IND": 1,
                "OPERATION_POSITION": null,
                "TYPE": "术前",
                "OPER_STATUS": 0,
                "PAT_AGE": 80
            }, {
                "PATIENT_ID": "4714439",
                "VISIT_ID": "1",
                "SCHEDULE_ID": "69662049",
                "NAME": "王大英",
                "SEX": "女",
                "INP_NO": "547693",
                "DATE_OF_BIRTH": -954921600000,
                "NATION": "汉族",
                "DEPT_STAYED": "内分泌科",
                "BED_NO": "2",
                "SCHEDULED_DATE_TIME": 1575247920000,
                "OPERATING_ROOM": "171",
                "OPERATING_ROOM_NO": "01",
                "BED_LABEL": null,
                "SEQUENCE": 1,
                "DIAG_BEFORE_OPERATION": null,
                "PATIENT_CONDITION": null,
                "OPERATION_NAME": null,
                "OPERATION_SCALE": null,
                "OPERATING_DEPT": "内分泌科",
                "SURGEON": "王凤芝",
                "FIRST_ASSISTANT": null,
                "SECOND_ASSISTANT": null,
                "THIRD_ASSISTANT": null,
                "FOURTH_ASSISTANT": null,
                "ANESTHESIA_METHOD": "神经阻滞麻醉",
                "ANESTHESIA_DOCTOR": "陈施德",
                "ANESTHESIA_ASSISTANT": "卿翠华",
                "SECOND_ANESTHESIA_DOCTOR": null,
                "THIRD_ANESTHESIA_DOCTOR": null,
                "FOURTH_ANESTHESIA_ASSISTANT": null,
                "FIRST_OPERATION_NURSE": null,
                "SECOND_OPERATION_NURSE": null,
                "FIRST_SUPPLY_NURSE": null,
                "SECOND_SUPPLY_NURSE": null,
                "THIRD_SUPPLY_NURSE": null,
                "NOTES_ON_OPERATION": null,
                "REQ_DATE_TIME": 1575216000000,
                "EMERGENCY_IND": 0,
                "ISOLATION_IND": 1,
                "RADIATE_IND": 1,
                "INFECTED_IND": 1,
                "OPERATION_POSITION": null,
                "TYPE": "术前",
                "OPER_STATUS": 0,
                "PAT_AGE": 80
            }, {
                "PATIENT_ID": "4714439",
                "VISIT_ID": "1",
                "SCHEDULE_ID": "69662049",
                "NAME": "王大英",
                "SEX": "女",
                "INP_NO": "547693",
                "DATE_OF_BIRTH": -954921600000,
                "NATION": "汉族",
                "DEPT_STAYED": "内分泌科",
                "BED_NO": "2",
                "SCHEDULED_DATE_TIME": 1575247920000,
                "OPERATING_ROOM": "171",
                "OPERATING_ROOM_NO": "01",
                "BED_LABEL": null,
                "SEQUENCE": 1,
                "DIAG_BEFORE_OPERATION": null,
                "PATIENT_CONDITION": null,
                "OPERATION_NAME": null,
                "OPERATION_SCALE": null,
                "OPERATING_DEPT": "内分泌科",
                "SURGEON": "王凤芝",
                "FIRST_ASSISTANT": null,
                "SECOND_ASSISTANT": null,
                "THIRD_ASSISTANT": null,
                "FOURTH_ASSISTANT": null,
                "ANESTHESIA_METHOD": "神经阻滞麻醉",
                "ANESTHESIA_DOCTOR": "陈施德",
                "ANESTHESIA_ASSISTANT": "卿翠华",
                "SECOND_ANESTHESIA_DOCTOR": null,
                "THIRD_ANESTHESIA_DOCTOR": null,
                "FOURTH_ANESTHESIA_ASSISTANT": null,
                "FIRST_OPERATION_NURSE": null,
                "SECOND_OPERATION_NURSE": null,
                "FIRST_SUPPLY_NURSE": null,
                "SECOND_SUPPLY_NURSE": null,
                "THIRD_SUPPLY_NURSE": null,
                "NOTES_ON_OPERATION": null,
                "REQ_DATE_TIME": 1575216000000,
                "EMERGENCY_IND": 0,
                "ISOLATION_IND": 1,
                "RADIATE_IND": 1,
                "INFECTED_IND": 1,
                "OPERATION_POSITION": null,
                "TYPE": "术前",
                "OPER_STATUS": 0,
                "PAT_AGE": 80
            }, {
                "PATIENT_ID": "4714439",
                "VISIT_ID": "1",
                "SCHEDULE_ID": "69662049",
                "NAME": "王大英",
                "SEX": "女",
                "INP_NO": "547693",
                "DATE_OF_BIRTH": -954921600000,
                "NATION": "汉族",
                "DEPT_STAYED": "内分泌科",
                "BED_NO": "2",
                "SCHEDULED_DATE_TIME": 1575247920000,
                "OPERATING_ROOM": "171",
                "OPERATING_ROOM_NO": "01",
                "BED_LABEL": null,
                "SEQUENCE": 1,
                "DIAG_BEFORE_OPERATION": null,
                "PATIENT_CONDITION": null,
                "OPERATION_NAME": null,
                "OPERATION_SCALE": null,
                "OPERATING_DEPT": "内分泌科",
                "SURGEON": "王凤芝",
                "FIRST_ASSISTANT": null,
                "SECOND_ASSISTANT": null,
                "THIRD_ASSISTANT": null,
                "FOURTH_ASSISTANT": null,
                "ANESTHESIA_METHOD": "神经阻滞麻醉",
                "ANESTHESIA_DOCTOR": "陈施德",
                "ANESTHESIA_ASSISTANT": "卿翠华",
                "SECOND_ANESTHESIA_DOCTOR": null,
                "THIRD_ANESTHESIA_DOCTOR": null,
                "FOURTH_ANESTHESIA_ASSISTANT": null,
                "FIRST_OPERATION_NURSE": null,
                "SECOND_OPERATION_NURSE": null,
                "FIRST_SUPPLY_NURSE": null,
                "SECOND_SUPPLY_NURSE": null,
                "THIRD_SUPPLY_NURSE": null,
                "NOTES_ON_OPERATION": null,
                "REQ_DATE_TIME": 1575216000000,
                "EMERGENCY_IND": 0,
                "ISOLATION_IND": 1,
                "RADIATE_IND": 1,
                "INFECTED_IND": 1,
                "OPERATION_POSITION": null,
                "TYPE": "术前",
                "OPER_STATUS": 0,
                "PAT_AGE": 80
            }, {
                "PATIENT_ID": "4714439",
                "VISIT_ID": "1",
                "SCHEDULE_ID": "69662049",
                "NAME": "王大英",
                "SEX": "女",
                "INP_NO": "547693",
                "DATE_OF_BIRTH": -954921600000,
                "NATION": "汉族",
                "DEPT_STAYED": "内分泌科",
                "BED_NO": "2",
                "SCHEDULED_DATE_TIME": 1575247920000,
                "OPERATING_ROOM": "171",
                "OPERATING_ROOM_NO": "01",
                "BED_LABEL": null,
                "SEQUENCE": 1,
                "DIAG_BEFORE_OPERATION": null,
                "PATIENT_CONDITION": null,
                "OPERATION_NAME": null,
                "OPERATION_SCALE": null,
                "OPERATING_DEPT": "内分泌科",
                "SURGEON": "王凤芝",
                "FIRST_ASSISTANT": null,
                "SECOND_ASSISTANT": null,
                "THIRD_ASSISTANT": null,
                "FOURTH_ASSISTANT": null,
                "ANESTHESIA_METHOD": "神经阻滞麻醉",
                "ANESTHESIA_DOCTOR": "陈施德",
                "ANESTHESIA_ASSISTANT": "卿翠华",
                "SECOND_ANESTHESIA_DOCTOR": null,
                "THIRD_ANESTHESIA_DOCTOR": null,
                "FOURTH_ANESTHESIA_ASSISTANT": null,
                "FIRST_OPERATION_NURSE": null,
                "SECOND_OPERATION_NURSE": null,
                "FIRST_SUPPLY_NURSE": null,
                "SECOND_SUPPLY_NURSE": null,
                "THIRD_SUPPLY_NURSE": null,
                "NOTES_ON_OPERATION": null,
                "REQ_DATE_TIME": 1575216000000,
                "EMERGENCY_IND": 0,
                "ISOLATION_IND": 1,
                "RADIATE_IND": 1,
                "INFECTED_IND": 1,
                "OPERATION_POSITION": null,
                "TYPE": "术前",
                "OPER_STATUS": 0,
                "PAT_AGE": 80
            },]
            if (firstFun == true) {
                firCont();
            }
            function firCont() {
                firstFun = false;
                var innerHTML = '';
                console.log(pageNum * showNum - showNum)
                console.log(pageNum * showNum)
                var startNum = pageNum * showNum - showNum;
                var endNum = pageNum * showNum;
                for (var i = startNum; i < endNum; i++) {
                    // console.log(i)
                    if (i < data.data.rows.length) {
                        innerHTML += '<div class="colum">'
                        for (var c = 0; c < titleData.length; c++) {
                            var idName = titleData[c].columnField;
                            innerHTML += '<div style="width:20%;">' + data.data.rows[i][idName] + '</div>';
                        }
                        innerHTML += '</div>';
                    } else {

                    }
                }
                $('.content').html(innerHTML);
                if (pageNum == pageTotal) {
                    clearInterval(tea);
                    pageNum = 1;
                    content();
                } else {
                    pageNum++;
                }
            }
            var tea = setInterval(function () {
                firCont();
            }, 6000);

        } else {
            alert('获取数据失败');
        }
    });
}