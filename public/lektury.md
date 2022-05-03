# Z gwiazdką (całe)

- [ ] Bogurodzica
- [ ] Dziady cz. III _Adam Mickiewicz_
- [ ] Pan Tadeusz _Adam Mickiewicz_
- [ ] Lalka _Bolesław Prus_
- [ ] Wesele _Stanisław Wyspiański_
- [ ] Ferdydurke _Witold Gombrowicz_
<br>
- [ ] Zemsta _Aleksander Fredro_
- [ ] Dziady cz. II _Adam Mickiewicz_

# Wybór
- [ ] Quo vadis _Henryk Sienkiewicz_
- [ ] Bajki _Ignacy Krasicki_
- [ ] Sklepy Cynamonowe _Bruno Schulz_
- [ ] Treny _Jan Kochanowski_

# Przydatne
- [ ] Zbrodnia i kara _Fiodor Dostojewski_
- [ ] Ludzie bezdomni _Stefan Żeromski_
- [ ] Makbet _William Shakespeare_
- [ ] Król Edyp _Sofokles_
- [ ] Konrad Wallenrod _Adam Mickiewicz_
- [ ] Kordian _Juliusz Słowacki_
- [ ] Antygona _Sofokles_
- [ ] Tango _Sławomir Mrożek_
- [ ] Dżuma _Albert Camus_
- [ ] Granica _Zofia Nałkowska_
- [ ] Przedwiośnie_Stefan Żeromski_
- [ ] Chłopi _Władysław Reymont_
- [ ] Moralność pani Dulskiej _Gabriela Zapolska_
- [ ] Hamlet _William Shakespeare_
- [ ] Dziady cz. IV _Adam Mickiewicz_
- [ ] Kamienie na szaniec _Aleksander Kamiński_
- [ ] Mendel Gdański _Maria Konopnicka_
- [ ] Inny świat _Gustaw Herling-Grudziński_
- [ ] Zdążyć przed panem Bogiem _Hanna Krall, Marek Edelman_
- [ ] Cierpienia młodego wertera _Johann Wolfgang von Goethe_
- [ ] Nad Niemnem _Eliza Orzeszkowa_
- [ ] Latarnik _Henryk Sienkiewicz_

<script>
    
    if (!window.location.protocol.startsWith("vscode")) {
        // save
        window.addEventListener('beforeunload', function (e) {
            window.localStorage.checked_lektury = Array.from(document.querySelectorAll("input.task-list-item-checkbox")).filter((it)=>it.checked).map((it)=>it.parentNode.innerText)
        })

        // load
        Array.from(document.querySelectorAll("li.task-list-item")).filter((it)=>(window.localStorage.checked_lektury||[]).includes(it.innerText)).forEach((it) => {
            it.querySelector("input.task-list-item-checkbox").checked = true
        })
    }
    

</script>