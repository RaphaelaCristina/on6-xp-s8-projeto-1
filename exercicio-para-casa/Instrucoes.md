# Dever de casa!

Olá. Já treinamos no projeto prático, agora vamos exercitar um pouco mais pra gente ficar bem fera em API.

## Nosso projeto

Esse exercício é bem parecido com o projeto que fizemos na aula, mas agora vamos mudar um pouquinho o tema (domínio). Vamos criar uma API de jogos (games), bem bonitona.

---

### Entendendo o projeto

Vamos entender melhor os nossos dados e contrato definido para nossa API. 
O json com os dados que vamos usar na nossa API é o arquivo `games.json` que está na pasta.

>Desculpem, só conseguimos os dados em inglês.

**Jogos**
```json
    [
        {
            "id": 1070,
            "name": "Super Mario World",
            "genre": "Plataform",
            "platforms": "Wii, New Nintendo 3DS, Wii U, Super Nintendo Entertainment System (SNES)",
            "first_release_date": 659145600,
            "slug": "super-mario-world",
            "summary": "Super Mario World is a jump-and-run platformer and a follow-up to Super Mario Bros. 3. The game retains many of the elements that debuted in Super Mario Bros. 3, such as the world map and Koopaling boss fights, while introducing a large variety of new gameplay mechanics, such as an expanded and less linear world map and the ability to save the game. Much of the game\u0027s introduced characters, game mechanics, and artistic themes influenced later titles in the Mario series. The game was released to best-selling status on the SNES, received large amounts of critical acclaim, and is commonly seen on Nintendo\u0027s best games of all times on various critic listings.",
            "company":"Nintendo EAD",
            "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co23jy.jpg"    
        },
        ...
    ] 
```

**Contratos**

| Recurso | Descrição |
| --- | --- |
| `/jogos` | Retorna todas os jogos da API |
```json
    [
        {
            "id": 1070,
            "nome": "Super Mario World",
            "genero": "Plataform",
            "plataformas": "Wii, New Nintendo 3DS, Wii U, Super Nintendo Entertainment System (SNES)",
            "capa": "https://images.igdb.com/igdb/image/upload/t_cover_big/co23jy.jpg"    
       }, ...
    ]
```
| Recurso | Descrição |
| --- | --- |
| `/jogos/:id` | Retorna apenas os dados do jogo com um determinado id |
```json
    {
        "id": 1070,
        "nome": "Super Mario World",
        "genero": "Plataform",
        "plataformas": "Wii, New Nintendo 3DS, Wii U, Super Nintendo Entertainment System (SNES)",
        "data_lancamento": 659145600,
        "slug": "super-mario-world",
        "resumo": "Super Mario World is a jump-and-run platformer and a follow-up to Super Mario Bros. 3. The game retains many of the elements that debuted in Super Mario Bros. 3, such as the world map and Koopaling boss fights, while introducing a large variety of new gameplay mechanics, such as an expanded and less linear world map and the ability to save the game. Much of the game\u0027s introduced characters, game mechanics, and artistic themes influenced later titles in the Mario series. The game was released to best-selling status on the SNES, received large amounts of critical acclaim, and is commonly seen on Nintendo\u0027s best games of all times on various critic listings.",
        "empresa":"Nintendo EAD",
        "capa": "https://images.igdb.com/igdb/image/upload/t_cover_big/co23jy.jpg"    
    }
```

## Como Fazer?

Não reinvente a roda, siga os passos que você fez na aula.

[Oi Analu, sdds!](https://github.com/reprograma/on6-xp-s7-api-get)
[Oi Alê, sdds!](https://github.com/reprograma/on6-xp-s8-projeto-1)


## Postman

Lembre de usar o postman para conferir se os contratos estão certinhos! ;)


## Como vai ser a entrega ?

Você vai criar todo projeto em uma pasta no seu repositório do github e quando estiver prontinho você vai mandar o link pra gente. Vamos te passar o link da planilha de entrega dos exercícios.

## E lembrem...
Usem o plantão de dúvidas, assistam a gravação da aula, tragam as dúvidas para a revisão. E se ainda assim não conseguir, solicite ajuda da coleguinha.Sabemos que está ficando mais puxado, vamos nos ajudar mutuamente!

## Alessandra do Carmo
- [instagram](https://www.instagram.com/alessandrizes)
- [linkedin](https://www.linkedin.com/in/alessandrizes/)
- [github](https://github.com/alessandrizes)
- email: aledocarmoo@gmail.com
