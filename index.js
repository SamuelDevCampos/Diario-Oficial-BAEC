const webhookUrl = 'https://discord.com/api/webhooks/1323328988088893571/EfLOSoJxtdSwmgPNwsedcRlw160z9PuahOGQZTmwZPrGeVxsuK2LvLeHg_6m3v8iLzgg';
const DadosForm = document.getElementById('dados-form');
const btnEnviar = document.getElementById('btnEnviar');

if (DadosForm) {

  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  var randomString = '';

  for (var i = 0; i < 12; i++) {
    randomString += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
}

DadosForm.addEventListener('submit', function (e) {
  e.preventDefault();

  var xhr = new XMLHttpRequest();
  var url = webhookUrl; // Substitua pela URL do seu webhook
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  const tipoBo = document.getElementById('tipoBo').value;
  const obs = document.getElementById('obs').value;


  var data = JSON.stringify({
    content: "<@1279515494487031848>",
    embeds: [
      {
        title: `${tipoBo}`,
        description: `${obs}\n`,
        color: 65280,  // Vermelho
        timestamp: new Date().toISOString(),
        footer: {
          text: `Chave de autenticação: ${randomString} | Publicado em:`,
          icon_url: "https://cdn.discordapp.com/attachments/1285418996899778612/1324117783969005735/icon.png?ex=6776fc48&is=6775aac8&hm=8b9f12d052650759ed9bf44d996493561550a89a5b794f652d40caf7b74052c8&"
        },
        author: {
          name: `BATALHÃO DE AÇÕES ESPECIAIS DA CAPITAL`,
        }
      }
    ]
  });

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 204) {
        console.log("Mensagem enviada com sucesso!");
      } else {
        console.log("Falha ao enviar a mensagem:", xhr.status, xhr.responseText);
      }
    }
  };

  xhr.send(data,);

});



