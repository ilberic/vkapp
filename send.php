<?php
$queryUrl = 'https://planeta-mebeli.bitrix24.ru/rest/2367/ggg4bq7gegvzgfon/crm.lead.add.json';
$queryData = http_build_query(array(
    'fields' => array(
        'TITLE' => 'Заявка группа ВКонтакте',
        'NAME' => $_POST["name"],
        'COMMENTS' => $_POST["comments"],
        'SOURCE_ID' => 52,
        'ASSIGNED_BY_ID' => 2329,
        'PHONE' => array(
            array(
                "VALUE" => $_POST["phone"],
                "VALUE_TYPE" => "WORK"
            )
        )
    ),
    'params' => array("REGISTER_SONET_EVENT" => "Y")
));
$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_SSL_VERIFYPEER => 0,
    CURLOPT_POST => 1,
    CURLOPT_HEADER => 0,
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => $queryUrl,
    CURLOPT_POSTFIELDS => $queryData,
));
$result = curl_exec($curl);
curl_close($curl);
?>