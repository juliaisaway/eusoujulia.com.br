---
layout: post
title:  "Minha jornada pelo Android Open Source (FOSS)"
date:   2022-05-14 23:52:00 -0300
categories: tecnologia
---
Nos últimos dois anos, ando tentando me interar mais sobre questões de privacidade e como empresas utilizam nossos dados para influenciar nossas decisões. Comecei com coisas que considero hoje simples, como excluir minha conta do Facebook e, posteriormente, do Instagram. Foi estranho sair de uma rede social onde tantas pessoas estão, até hoje ouço comentários do porque eu fiz isso. Mas considero alguns dos maiores acertos que já fiz.

E então continuei... Em seguida, mudei o motor de busca que uso para o DuckDuckGo ao invés do Google. Teve uma curva de aprendizado e, ainda as vezes preciso recorrer ao Google, mas no geral, 90% do meu uso fica todo no DuckDuckGo. Hoje estou 100% adaptado e não o trocaria por nada. Porém mantive outros serviços Google, como Gmail, Calendar, etc.

Possuir esse olhar de acessibilidade foi uma mudança grande em como eu agia. Sempre fui entusiasta e habilitava toda e qualquer integração possível. Tive (e ainda tenho) muita coisa IOT controlada pelo Google Home, inclusive enquanto escrevo, 3 aparelhos desses estão rodeando minha casa. E ainda sim, cá estou eu falando de privacidade...

Meu computador hoje é um desktop Windows que eu mesmo montei e, ao montar ele, sai do Google Drive e entre no OneDrive. O que não resolve nada, pois só troquei quem lê minhas informações. Mas considerei vitória por sair um pouco mais do Google (porém já estou estudando sair do OneDrive também). Agora no celular, sempre foi um desafio.

No começo de 2021 tentei usar alguns apps do **F-Droid**, mas a experiência de usuário ali foi péssima, desisti e voltei a integrar muita coisa, usando as soluções da Samsung em meu celular. Troquei de celular nesse tempo, adquiri um **Galaxy Z Flip 3** e me apaixonei por celulares dobráveis, na qual não me vejo mais sem. Porém, o mesmo é lotado de softwares da Samsung.

O plano começou com a [compra do Twitter pelo Elon Musk](https://www.uol.com.br/tilt/noticias/redacao/2022/04/25/elon-musk-compra-twitter.htm), o que me fez migrar novamente ao Mastodon, visto que odeio o bilionário. Junto disso, passei por uma formatação do meu celular e, ao reinstalar tudo, decidi mudar e testar mais soluções independentes.

{:style="text-align:center;"}
[![Meu celular, um Galaxy Z Flip 3]({{ site.url }}/assets/posts/post-2022-05-15-001.jpeg){:width="500"}]({{ site.url }}/assets/posts/post-2022-05-15-001.jpeg){:target="_blank"}{:.centered}

Já vamos abordar o elefante na sala: usar apps FOSS (Free Open Source Software) não é uma tarefa fácil, rápida ou sequer agradável. É um esforço que você precisa querer passar e que vai comprometer sua experiência. Empresas grandes tem investimento e pessoas dedicadas a tornar mais simples a experiência. E sei disso justamente porque eu trabalho como Designer em uma empresa e vejo isso no dia a dia.

Mas então, porque usar isso? Sinceramente, é uma escolha individual. No meu caso, eu gosto de ter controle sobre as aplicações que uso e os dados que forneço. Eu precisava? Na teoria não... Porém eu sinto que estou colaborando para que empresas como Facebook se perpetuem, por isso eu decidi tomar esses passos. É algo que todos podem fazer? Definitivamente não. Mas se você é entusiasta, a experiência pode ser divertida de configurar.

Dito isso, passei a mapear os apps que uso e configurei alguns adicionais para me ajudar nessa jornada. Com isso, vou listar esses passos e as alternativas que fiz e, após isso, listar os problemas que encontrei.

## Apps utilizados

- **F-Droid:**
O primeiro passo foi baixar o [F-Droid](https://f-droid.org/), a principal loja alternativa do Android. A experiência é estranha e demora pra acostumar, a busca é terrível e as atualizações são diferentes do padrão de mercado. Estava difícil usar, até ver os clientes alternativos que, achei bem fracos também, até conhecer o [Droid-ify](https://f-droid.org/pt_BR/packages/com.looker.droidify/), que melhora demais a experiência de usar os repos do F-Droid e outros open source integrados juntos.

- **Controle de Tracking:**
Primeiro app instalado foi o [TrackerControl](https://f-droid.org/pt_BR/packages/net.kollnig.missioncontrol.fdroid/), um app que monitora todos os apps que estão instalados e mostra quais trackers ele usa, além de permitir bloquear os mesmos. Isso é maravilhoso, pois posso impedir certos apps de acessar trakings de social, de alanytics e outros, sem depender do app permitir que eu faça. Claro, tem app que deixa de funcionar assim, mas é só ir vendo app a app e ir ajustando conforme quer. Considero essencial pra quem quer iniciar nesse mundo da privacidade.

- **Gerenciador de Senhas e Autenticador:**
Já uso gerenciadores de senhas a tempos. Iniciei em 2018 com o 1Password, porém migrei em 2021 pro [Bitwarden](https://bitwarden.com/), que é Open Source e tem as mesmas funcionalidades. Porém, só recentemente passei a adotar um app dedicado a autenticador de duas etapas, o [Aegis Authenticator](https://f-droid.org/pt_BR/packages/com.beemdevelopment.aegis/). O app é excelente e muito bonito, super fácil de adicionar novos itens, etc. Um dos mais fáceis dessa lista.

- **Localização do Aparelho**
Para segurança, queria um app de rastreio que não fosse do Google e conheci o [FindMyDevice](https://f-droid.org/pt_BR/packages/de.nulide.findmydevice/). Ele utiliza SMS pra conseguir rastrear e, inicialmente estava bem receoso, porém o app surpreendeu com muitas opções e configurações que tornam o mesmo seguro.

- **Podcasts:**
Tenho a licença vitalícia do PocketCasts, que comprei lá em 2016 e hoje é algo que nem é possível mais comprar. Sempre achei o PocketCasts a melhor experiência de Podcasts em celulares, a sincronia é excelente e nunca tive o que reclamar. Porém, ele foi comprado diversas vezes, ficou abandonado e hoje está num limbo da Automattic e sinceramente não sei como vai ficar. Com isso, resolvi testar o [AntennaPod](https://f-droid.org/pt_BR/packages/de.danoeh.antennapod/), o mais famoso app FOSS de podcast.
O App é bonito, porém tem [filosofias de design que não me agradaram](https://mastodon.online/@ilton/108212252461206735). Ainda sim, resolvi dar uma chance e estou usando. Outra perda é a sincronia, que não tem mais integração nativa. Ele até integra com o gpodder, mas é uma das coisas mais horríveis e nada funcionais que já vi, então desisti e aceitei que podcasts ficarão travados no Android.

- **Browser:**
Uso o Firefox a anos também e gosto muito que ele em partes é open source e não compartilha os trackings terríveis do Google e nem tem as implementações bizarras de bitcoin, como no Brave. No celular, também queria manter o Firefox, porém ele é exclusivo da Play Store... Até que descobri o [Fennec](https://f-droid.org/pt_BR/packages/org.mozilla.fennec_fdroid/). Esse browser é basicamente o Firefox, é inclusive da Mozilla e tem esse nome que era o codinome do projeto do Firefox for Android original. Ou seja, tem zero limitações, é Open Source e está no F-Droid.

- **Gerenciador de Download:**
VOcê deve estar se perguntando: "quem precisa de gerenciador de downloads?" E a resposta provavelmente é "ninguem". Porém quis testar um e fui no [Download Navi](https://f-droid.org/pt_BR/packages/com.tachibana.downloader/). A interface é ok, mas ele tem várias ferramentas, além de poder integrar com o Fennec/Firefox e usar ele nativamente.

- **Reddit:**
Estava a anos com o Sync Pro, que considero um dos apps mais integrados com Android e sempre achei maravilhoso, porém queria sair da Play Store e ele é pago. Testando alguns, escolhi o [Infinity for Reddit](https://f-droid.org/pt_BR/packages/ml.docilealligator.infinityforreddit/), que tem uma experiência bem decente depois de bem configurado, mas gastei umas boas duas horas configurando ele inteiro... Ainda sim, o Sync Pro é bem melhor.

- **Notas gerais:**
Testei muitos apps ao longo do tempo e estava usando o Notion, que me acostumei a lidar com meu trabalho. Ele é muito bom, mas é bem mais do que eu preciso, por isso podia tentar ver um mais simples. Dai conheci o [Joplin](https://joplinapp.org/), um app absurdamente poderoso porém simples. Ele utiliza as notas em Markdown, que já estou familiarizado e tem sincronia com tudo, utilizando o Dropbox como seu servidor. Bastou integrar ali com dois cliques e pronto, escrevo no PC e o Android ja puxa tudo na hora.

- **Mapas:**
Convenhamos: É bem difícil sair do Google Maps. Por ter todas as suas ferramentas de rastreio e seu orçamento infinito, o Google Maps é de longe a melhor ferramenta, mas não quer dizer que não tenha alternativas. O mais conhecido é o [OpenStreetMaps](https://www.openstreetmap.org), que funciona perfeitamente se você mora na Europa ou Estados Unidos. Já no Brasil, ele é competente pra dizer o mínimo. Para usar no Android, instalei o app [OsmAnd+](https://osmand.net/) que, infelizmente não está na F-Droid mas sim na Play Store, mas ele ainda é Open Source e sem usar trackers do Google. Estou me adaptando ainda, me perdi uma vez com o GPS dele, mas no geral parece uma boa saída.

- **Gerenciador de Arquivos:**
Usava o nativo da Samsung que é competente, mas tem aquela filosofia de tentar agrupar em categorias e não te dar a listagem de pastas logo de cara, por isso queria algo diferente, que encontrei no [Material Files](https://f-droid.org/pt_BR/packages/me.zhanghai.android.files/). Ele é super simples e direto ao ponto, mostrando a listagem de pastas e acabou. Porém, ele consegue abrir links FTP e também acessar as pastas root (caso você desbloqueie), além de ser muito bonito.

- **Visualizador de Fotos:**
Aqui encontrei outro problema, todos da F-Droid são absurdamente feios e nada intuitivos. Pensei em manter o da Samsung mesmo, até conhecer o [CameraRollX](https://apt.izzysoft.de/fdroid/index/apk/com.looker.camerarollx), um app open source muito bonito e cheio de configurações. Ele está disponível no repo do IzzyOnDroid, que é facil de ativar no F-Droid ou outro cliente alternativo.

- **Leitor de Mangás:**
Se não ficou claro ainda, eu sou um completo Otaku. Com isso, leitura de mangás é parte da minha rotina mas ficava preso no desktop apenas, pois sites como MangaDex são terríveis no celular. A um tempo, fui apresentado ao [Tachiyomi](https://tachiyomi.org/), que é um app maravilhoso, integra com diversos sites e idiomas e torna a leitura muito boa. Ele é um leitor de quadrinhos no geral, então você pode adicionar coisas como HQs americanas ou até webcomics como xkcd que irá funcionar numa boa.

- **Leitor RSS:**
Tive muita dificuldade com esse ponto, no iOS usei o NetNewsWire que me deixou muito mal acostumado e não encontrava nada equivalente no Android, o mais próximo era o próprio app do Feedly, até conhecer o [ReadYou](https://f-droid.org/pt_BR/packages/com.looker.droidify/), um dos apps mais bonitos dessa lista, super funcional e perfeito para o que eu buscava. Única limitação é que ele está em desenvolvimento, então sua sincronia ainda não funciona, mas o criador promete em breve.

- **Tracking de Leitura:**
Nunca tinha achado um app legal pra identificar e cadastrar os livros que tenho/já li, porém achei por acaso o [OpenReads](https://f-droid.org/pt_BR/packages/software.mdev.bookstracker/) que achei incrível. Consegui cadastrar cerca de 90% dos livros que tenho (infelizmente alguns muito novos em português, ele não conseguiu achar). Além disso, conta com uma ótima interface.

- **Player de Música/Audio:**
Embora eu assine o Tidal para ouvir músicas via streaming, muitas vezes preciso utilizar MP3 local, especialmente para as trilhas de RPG que mestro. Pra isso, fui direto num clássico, o [VLC](https://f-droid.org/pt_BR/packages/org.videolan.vlc/). Ele é incrível no Android, organiza tudo bonitinho e funciona do jeito que quero. Testei outros players, mas sempre volto pro VLC.

- **Telegram:**
Tecnicamente o Telegram não é FOSS por padrão, mas existe uma versão do mesmo na F-Droid com uma conversão open source, porém resolvi ir pra um app alternativo e estou usando o [Nekogram X](https://github.com/NekoX-Dev/NekoX), um cliente que adiciona algumas funcionalidades extras, porém mantendo a essência do mesmo. Tem apenas algumas diferenças da versão FOSS pra versão da Play Store: Como não tem APIs do Google, tudo de mapas usa o OpenStreetMaps e ele exibe uma notificação constante, pois sem o Firebase do Google, não daria pra receber push.

- **Twitter:**
Acho a experiência do Twitter for Android horrível, porém todos os clientes tem limitações nas suas APIs e não funcionam bem e praticamente ninguem migrou pra Api 2.0 do Twitter. Mas pra minha surpresa, o [Twidere X](https://f-droid.org/pt_BR/packages/com.twidere.twiderex/) utiliza a nova API já, é lindo e open source, porém com uma pegadinha: eles não tem a Chave de API, você tem que gerar uma. Então é chatinho configurar de cara, precisa criar conta no Twitter for Developers e registrar uma aplicação, mas no geral funciona muito bem.

- **Fediverso (Mastodon/Pixelfed):**
Sou um entusiasta do Fediverso, então claro que eu ia ter apps pra eles. Pro [Mastodon](https://f-droid.org/pt_BR/packages/com.keylesspalace.tusky/), uso o clássico Tusky, que é lindo e super funcional. Saiu recentemente o cliente oficial de Mastodon pra Android, mas não gostei da experiência dele. Para o Pixelfed, a única opção no momento é o [PixelDroid](https://f-droid.org/pt_BR/packages/org.pixeldroid.app/), que é um app horrível de feio e com usabilidade péssima. Mas não tem nenhuma outra alternativa no momento. E hey, funciona..

- **YouTube:**
Em todo fórum/subreddit de discussões FOSS, sempre vejo que YouTube é o maior gargalo. E eu sou um usuário muito ativo do mesmo, consumo muitos canais na plataforma e não ficaria sem. Com isso, estou testando o [NewPipe](https://f-droid.org/pt_BR/packages/org.schabi.newpipe/), um cliente front-end pro YouTube que não faz login e bloqueia rastreamento e publicidade. Você pode seguir os canais diretamente por ele sem ter conta, mas você perde integrações como status de visualização e não tem algoritmo de recomendações, mas funciona perfeitamente bem.

- **Teclado:**
Uso desde o seu lançamento o SwiftKey, que é maravilhoso, porém desde que a Microsoft comprou, passei a ter um pé atrás com ele (embora a nova integração com o Windows seja incrível de boa). Para FOSS, testei o [FlorisBoard](https://f-droid.org/packages/dev.patrickgold.florisboard/), uim teclado ainda em desenvolvimento, porém muito bonito e customizável. Infelizmente não consigo usar ele ainda, pois como está em beta, ele não tem sugestões nem corretor, mas deixei instalado para acompanhar seu desenvolvimento e, quem sabe um dia trocar.

## Limitações e problemas

Foi uma longa jornada cheia de configurações, tentativa e erro e muita leitura de fóruns pra tentar entender o que eu estava fazendo de errado. Ainda assim, saio muito satisfeito por tudo que configurei.

Muita coisa se torna impossível e simplesmente nem tento mais procurar alternativas. Clientes de Calendário e Contatos simplesmente preferi manter o nativo, até porque se integram com meu relógio, um Galaxy Watch 4. E nunca vi nenhum app FOSS sequer se importar com WearOS, então tudo que quero receber por lá, mantenho o app nativo.

Alguns eu fui atrás de alternativas não FOSS, mas que me tirassem do Google, como o [Todoist](https://todoist.com/app/) para listas e o [Fastmail](https://www.fastmail.com/) para e-mails. Infelizmente não consigo usar o calendário e contatos do Fastmail fora do app dele, o que é super inconveniente, mas paciência...

Para pagamentos digitais, eu removi o Google Pay e migrei pro Samsung Pay, que já havia instalado no celular. Não resolve o problema mas como disse, todo passo fora do Google é uma vitória.

Infelizmente sinto que esbarrei um pouco onde eu conseguia avançar. Muitas coisas ainda dependo muito, não apenas pelo meu trabalho usar Google Workspaces, mas tenho alguns aparelhos Google em casa, como Chromecast e lâmpadas IOT. E quanto a essas integrações é bem dificil de achar alternativas, visto que o mercado hoje é dominado por Google ou Amazon/Alexa... E acho que prefiro Google que Alexa.

## E agora?

{:style="text-align:center;"}
[![Meu celular, um Galaxy Z Flip 3]({{ site.url }}/assets/posts/post-2022-05-15-002.jpeg){:width="500"}]({{ site.url }}/assets/posts/post-2022-05-15-002.jpeg){:target="_blank"}{:.centered}

Por enquanto estou testando, mas a experiência no geral está agradável e acho difícil eu voltar atrás agora. Ainda vou procurar corrigir os problemas com calendário, que é o que mais me incomoda, visto que uso muito essa funcionalidade no geral. Mas até então, meu saldo está super positivo.

Minha maior reclamação de softwares FOSS no geral são interfaces. Convenhamos: esses apps tendem a ter nenhuma interface agradável ou experiência do usuário, muitas vezes justamente porque não tem designer junto, mas sim devs independentes. Meu sonho é trazer mais designers pra esse mundo, aproximar e tentar mostrar que podemos trazer muita qualidade de vida nas experiências e ainda sim sermos éticos em Design. Inclusive, estou brincando de fazer algumas interfaces de apps e disponibilizar gratuitamente para quem queira desenvolver ou usar em seu app ;) Mais notícias em breve.

Outro item que preciso resolver é em relação a nuvem. Utilizo muitos arquivos em nuvem e não consigo abrir mão disso. Já usei o Google Drive e hoje estou no OneDrive, mas queria sair pra uma solução melhor. Pensei em ir pro Dropbox, porém o mesmo é muito caro e em dólar. Quero experimentar o Syncthing e ver como lido, mas não quero ele hospedado no meu PC principal, mas sim num NAS dedicado, o que vai um dinheiro para investir. Por enquanto, continuo com minha licença anual já paga do OneDrive.

Ainda estou pensando em migrar para Linux no Desktop também. Uso as vezes um Linux Mint na casa dos meus pais e testei recentemente o Fedora 36 e gostei demais do sistema. A única coisa que me impede são jogos, visto que montei esse desktop pensando nisso e investindo pesadamente em uma placa de vídeo (adquiri uma GeForce RTX 3060). Mas estou vendo de pegar um segundo SSD, instalar Fedora e testar jogos via ProtonDB.

E acredito que isso conclui toda a experiência que tive ;) Aceito sugestões e vocês podem me encontrar nos links abaixo, no rodapé do blog.