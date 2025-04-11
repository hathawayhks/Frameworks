<?php
// Array associativo para os cinco primeiros países nas Olimpíadas do Rio 2016
$medalhas = [
    [
        'classificacao' => 1,
        'pais' => 'Estados Unidos',
        'ouro' => 46,
        'prata' => 37,
        'bronze' => 38,
        'imagem' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/150px-Flag_of_the_United_States.svg.png',
        'medalhaBronze' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Bronze_medal.svg/1024px-Bronze_medal.svg.png',
        'medalhaPrata' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Silver_medal.svg/1024px-Silver_medal.svg.png',
        'medalhaOuro' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Gold_medal.svg/1024px-Gold_medal.svg.png'
    ],
    [
        'classificacao' => 2,
        'pais' => 'Grã-Bretanha',
        'ouro' => 27,
        'prata' => 23,
        'bronze' => 17,
        'imagem' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/150px-Flag_of_the_United_Kingdom_%283-5%29.svg.png',
        'medalhaBronze' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Bronze_medal.svg/1024px-Bronze_medal.svg.png',
        'medalhaPrata' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Silver_medal.svg/1024px-Silver_medal.svg.png',
        'medalhaOuro' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Gold_medal.svg/1024px-Gold_medal.svg.png'
    ],
    [
        'classificacao' => 3,
        'pais' => 'China',
        'ouro' => 26,
        'prata' => 18,
        'bronze' => 26,
        'imagem' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/150px-Flag_of_the_People%27s_Republic_of_China.svg.png',
        'medalhaBronze' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Bronze_medal.svg/1024px-Bronze_medal.svg.png',
        'medalhaPrata' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Silver_medal.svg/1024px-Silver_medal.svg.png',
        'medalhaOuro' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Gold_medal.svg/1024px-Gold_medal.svg.png'
    ],
    [
        'classificacao' => 4,
        'pais' => 'Rússia',
        'ouro' => 19,
        'prata' => 18,
        'bronze' => 19,
        'imagem' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/150px-Flag_of_Russia.svg.png',
        'medalhaBronze' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Bronze_medal.svg/1024px-Bronze_medal.svg.png',
        'medalhaPrata' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Silver_medal.svg/1024px-Silver_medal.svg.png',
        'medalhaOuro' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Gold_medal.svg/1024px-Gold_medal.svg.png'
    ],
    [
        'classificacao' => 5,
        'pais' => 'Austrália',
        'ouro' => 8,
        'prata' => 11,
        'bronze' => 10,
        'imagem' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/150px-Flag_of_Australia.svg.png',
        'medalhaBronze' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Bronze_medal.svg/1024px-Bronze_medal.svg.png',
        'medalhaPrata' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Silver_medal.svg/1024px-Silver_medal.svg.png',
        'medalhaOuro' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Gold_medal.svg/1024px-Gold_medal.svg.png'
    ]
];

function imprimirTabelaMedalhas($medalhas) {
    echo '<table border="1">';
    echo '<tr><th>Classificação</th><th>País</th><th>Ouro</th><th>Prata</th><th>Bronze</th></tr>';
    foreach ($medalhas as $medalha) {
        echo '<tr>';
        echo '<td>' . $medalha['classificacao'] . '</td>';
        echo '<td><img src="' . $medalha['imagem'] . '" alt="Flag" width="20"> ' . $medalha['pais'] . '</td>';
        echo '<td><img src="' . $medalha['medalhaOuro'] . '" alt="Gold Medal" width="20"> ' . $medalha['ouro'] . '</td>';
        echo '<td><img src="' . $medalha['medalhaPrata'] . '" alt="Silver Medal" width="20"> ' . $medalha['prata'] . '</td>';
        echo '<td><img src="' . $medalha['medalhaBronze'] . '" alt="Bronze Medal" width="20"> ' . $medalha['bronze'] . '</td>';
        echo '</tr>';
    }
    echo '</table>';
}
imprimirTabelaMedalhas($medalhas);
?>
