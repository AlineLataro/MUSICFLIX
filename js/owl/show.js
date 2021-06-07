<style>var html = '<table style="width:500px; border:1px solid #ccc">';
html += '<tbody>';
    for(let i = 0; i < 10; i++){
        html += '<tr>';
            html += '<td style="width:100px;border:1px solid #CCC;">';
                html += '<span>teste '+(i+1)+'</span>';
            html += '</td>';
            html += '<td style="border:1px solid #CCC;">';
                html += '<span>texto '+(i+1)+'</span>';
            html += '</td>';
        html += '</tr>';
    }
html += '</tbody>';
html += '</table>';

document.body.innerHTML += html;
</style>