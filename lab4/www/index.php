<?php
echo "hello PHP !!";
// phpinfo();

$no = 10;
$name = 'ohm';

?>


<table border="1">
    <thead>
        <tr>
            <th>#</th>
            <th>name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Dang</td>
        <tr>
        <?php
        for($i = 2;$i <5;$i++){
        ?>
        <td><?php echo $i?></td>
            <td><?= $name ?></td></tr>
            
        </tr>
        <?php
        }
        ?>
    </tbody>
</table>