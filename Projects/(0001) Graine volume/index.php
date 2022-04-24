<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Расчёт геометрических параметров приёмных объёмов">
    <meta name="keywords" content="Зернообработка, элеватор, зерноприёмка, зернохранение, завальная яма, бункер">
    <meta name="author" content="Alexandr Matveev">
    <title>Геометрия бункера или ямы</title>
    <link href="normalize.css" rel="stylesheet">
    <link href="styles.css" rel="stylesheet">
    <?php

    // Массив наименований
    $arrayName = [
        ['A', 'B', 'a', 'b', 'e', 'f', 'h', 'H', 'r'],
        ['A', 'B', 'a', 'b', 'e', 'f', 'h', 'H', '&#961;, т/м<sup>3</sup>']
    ];
    $arrayAngle = ['1', '2', '3', '4', '41', '12', '23', '34'];

    // Валидация данных
    $total = false;
    foreach ($_GET as $item) {
        if (is_numeric($item) && $item >= 0) {
            $total = true;
        } else {
            $total = false;
            break;
        }
    }

    // Вычисления результатов
    if ($total) {
        $total = [];
        $total['V'] = round(($_GET['sizeA'] * $_GET['sizeB'] * $_GET['sizeH'] / 3 + $_GET['sizeA'] * $_GET['sizeB'] * $_GET['sizeh']
                + $_GET['sizeA'] * $_GET['sizeH'] * $_GET['sizeb'] / 6 + $_GET['sizeB'] * $_GET['sizeH'] * $_GET['sizea'] / 6 +
                $_GET['sizeH'] * $_GET['sizea'] * $_GET['sizeb'] / 3) / 10 ** 9, 1);
        if ($_GET['sizee'] == 0) {
            $total['A1'] = 90;
        } else {
            $total['A1'] = str_replace('.', ',', round(atan($_GET['sizeH'] / $_GET['sizee']) / pi() * 180, 1));
        }
        if ($_GET['sizeB'] - $_GET['sizeb'] - $_GET['sizef'] == 0) {
            $total['A2'] = 90;
        } else {
            $total['A2'] = str_replace('.', ',', round(atan($_GET['sizeH'] / ($_GET['sizeB'] - $_GET['sizeb'] - $_GET['sizef'])) / pi() * 180, 1));
        }
        if ($_GET['sizeA'] - $_GET['sizea'] - $_GET['sizee'] == 0) {
            $total['A3'] = 90;
        } else {
            $total['A3'] = str_replace('.', ',', round(atan($_GET['sizeH'] / ($_GET['sizeA'] - $_GET['sizea'] - $_GET['sizee'])) / pi() * 180, 1));
        }
        if ($_GET['sizef'] == 0) {
            $total['A4'] = 90;
        } else {
            $total['A4'] = str_replace('.', ',', round(atan($_GET['sizeH'] / $_GET['sizef']) / pi() * 180, 1));
        }
        $total['A12'] = str_replace('.', ',', round(atan($_GET['sizeH'] / sqrt(pow($_GET['sizeB']
                        - $_GET['sizeb'] - $_GET['sizef'], 2) + pow($_GET['sizee'], 2))) / pi() * 180, 1));
        $total['A23'] = str_replace('.', ',', round(atan($_GET['sizeH'] / sqrt(pow($_GET['sizeB']
                        - $_GET['sizeb'] - $_GET['sizef'], 2) + pow($_GET['sizeA'] - $_GET['sizea'] - $_GET['sizee'], 2))) / pi() * 180, 1));
        $total['A34'] = str_replace('.', ',', round(atan($_GET['sizeH'] / sqrt(pow($_GET['sizef'], 2)
                    + pow($_GET['sizeA'] - $_GET['sizea'] - $_GET['sizee'], 2))) / pi() * 180, 1));
        $total['A41'] = str_replace('.', ',', round(atan($_GET['sizeH'] / sqrt(pow($_GET['sizef'], 2)
                    + pow($_GET['sizee'], 2))) / pi() * 180, 1));
        $total['Vt'] = str_replace('.', ',', round($total['V'] * $_GET['sizer'], 1));
        $total['ABm'] = round($_GET['sizeA'] * $_GET['sizeB'] * 100 / pow(10, 9), 1);
        $total['ABt'] = str_replace('.', ',', round($total['ABm'] ** $_GET['sizer'], 1));
    }
    ?>
</head>
<body>
<main>
    <p class="text-major"><u>Конус объёма приёмного бункера или ямы</u></p>
    <div>
    <img class="img-type-famous" src="./images/01.svg" alt="Don't load" width="720">
    <form action="" method="get">
        <?php foreach ($arrayName[0] as $key => $item): ?>
            <div class="field<?= $item ?>">
                <label for="size<?= $item ?>"><?= $arrayName[1][$key] ?></label>
                <input type="text" size="1" name="size<?= $item ?>" id="size<?= $item ?>"
                       value="<?= $_GET['size' . $item] ?>">
            </div>
        <?php endforeach; ?>
        <?php foreach ($arrayAngle as $item): ?>
            <?php if (!empty($total['A' . $item])): ?>
                <p class="fieldA<?= $item ?>">&#945<sub><?= $item ?></sub>=<?= $total['A' . $item] ?>&#176</p>
            <?php endif; ?>
        <?php endforeach; ?>
        <button class="fieldBut1">Расчитать</button>
        <?php if (empty(!$total['V'])): ?>
            <p class="fieldAComplet textGreen">РАСЧЁТ ВЫПОЛНЕН</p>
            <div class="text-result">
                <u>Объём будет:</u><br>
                <div class="text-result-value">
                    V=<?= str_replace('.', ',', $total['V']) ?> м<sup>3</sup> или Vт=<?= $total['Vt'] ?> т
                </div>
                <span class="text-result-value-after">при плотности <?= str_replace('.', ',', $_GET['sizer']) ?> т/м<sup>3</sup></span>
            </div>
            <p class="text-description"><u>Примечание:</u><br>Каждый 0,1 м размера "h" добавляет
                A&#xD7;B=<?= str_replace('.', ',', $total['ABm']) ?> м<sup>3</sup>
                объёма или A&#xD7;B=<?= $total['ABt'] ?> т</p>
        <?php else: ?>
            <p class="fieldAComplet textRed">РАСЧЁТ НЕ ВЫПОЛНЕН ИЛИ ДАННЫЕ НЕ ВЕРНЫ</p>
        <?php endif; ?>
    </form>
    </div>
</main>
</body>
</html>