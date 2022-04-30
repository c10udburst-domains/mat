import json
from difflib import SequenceMatcher

def similar(a, b):
    return SequenceMatcher(None, a, b).ratio()

def select(q, objects, key):
    matches = list(filter(
        lambda x: similar(x[key].lower(), q.lower())>0.8,
        objects
    ))
    if matches:
        for i, match in enumerate(matches):
            print(f"{i}) {match[key]}")
        print("-) new entry")
        i = int(input("> "))
        return matches[i]
         

motywy = json.load(open("motywy.json", "r", encoding='utf-8'))
opisy = json.load(open("opisy.json", "r", encoding='utf-8'))
utwory = json.load(open("utwory.json", "r", encoding='utf-8'))

tytul = input("tytul> ")
tytul = select(tytul, utwory.values(), "tytul") or tytul
motyw = input("motyw> ")
motyw = select(motyw, motywy.values(), "nazwa") or motyw

if isinstance(tytul, str):
    _id = input(f"id of {tytul}> ")
    utwory[_id] = {
        "id": _id,
        "tytul": tytul,
        "motywy": []
    }
    tytul = _id
else:
    tytul = tytul['id']

if isinstance(motyw, str):
    _id = input(f"id of {motyw}> ")
    motywy[_id] = {
        "id": _id,
        "nazwa": motyw,
        "utwory": []
    }
    motyw = _id
else:
    motyw = motyw['id']
    
opis_key = f"{tytul}|{motyw}"
if opis_key in opisy.keys() and opisy[opis_key].strip():
    print(opisy[opis_key])
    raise SystemExit(0)
else:
    opis = input("opis> ")
    
opisy[opis_key] = opis

motywy[motyw]['utwory'].append(tytul)
motywy[motyw]['utwory'] = list(set(motywy[motyw]['utwory']))

utwory[tytul]['motywy'].append(motyw)
utwory[tytul]['motywy'] = list(set(utwory[tytul]['motywy']))

json.dump(motywy, open("motywy.json", "w+", encoding='utf-8'), ensure_ascii=False, indent=1, sort_keys=True)
json.dump(opisy, open("opisy.json", "w+", encoding='utf-8'), ensure_ascii=False, indent=1, sort_keys=True)
json.dump(utwory, open("utwory.json", "w+", encoding='utf-8'), ensure_ascii=False, indent=1, sort_keys=True)