# Z gwiazdką (całe)

- [ ] Bogurodzica
- [ ] Dziady cz. III _Adam Mickiewicz_
- [ ] Pan Tadeusz _Adam Mickiewicz_
- [ ] Lalka
- [ ] Wesele
- [ ] Ferdydurke
<br>
- [ ] Zemsta
- [ ] Dziady cz. II _Adam Mickiewicz_

# Wybór
- [ ] Quo vadis
- [ ] Bajki
- [ ] Sklepy Cynamonowe
- [ ] Treny

# Przydatne
- [ ] Zbrodnia i kara _Fiodor Dostojewski_
- [ ] Ludzie bezdomni
- [ ] Makbet
- [ ] Król Edyp
- [ ] Konrad Wallenrod _Adam Mickiewicz_
- [ ] Kordian
- [ ] Antygona
- [ ] Tango
- [ ] Dżuma
- [ ] Granica
- [ ] Chłopi
- [ ] Moralność pani Dulskiej
- [ ] Hamlet
- [ ] Dziady cz. IV _Adam Mickiewicz_
- [ ] Kamienie na szaniec
- [ ] Mendel Gdański
- [ ] Inny świat
- [ ] Zdążyć przed panem Bogiem
- [ ] Cierpienia młodego wertera
- [ ] Nad Niemnem
- [ ] Latarnik _Henryk Sienkiewicz_

<script>
    // save
    window.addEventListener('beforeunload', function (e) {
        window.localStorage.checked_lektury = Array.from(document.querySelectorAll("input.task-list-item-checkbox")).filter((it)=>it.checked).map((it)=>it.parentNode.innerHTML)
    })

    // load
    Array.from(document.querySelectorAll("li.task-list-item")).filter((it)=>(window.localStorage.checked_lektury||[]).includes(it.innerHTML)).forEach((it) => {
        it.querySelector("input.task-list-item-checkbox").checked = true
    })

</script>