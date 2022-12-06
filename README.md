# [Grow Your Knowledge] - Angular Forms Intro

## Užduotys

### Užduotis #1 - servisas

- Sugeneruokite `MovieSearchService`
- Sukurkite `getMovies` metodą, kuriam paduodamas pavadinimas ir metai.

Pvz:

```bash
npx ng g s services/movie-search
```

Branch: `task-1`

### Užduotis #2 - formos komponentas

- `MovieSearchFormComponent`
- Sukurkite formos HTML, kurioje būtų input filmo pavadinimui ir metams.

Pvz:

```bash
npx ng g c components/movie-search-form
```

Branch: `task-2`

### Užduotis #3 - Paieškos forma su filmo pavadinimu ir metais

- Naudokite Reactive formą komponento Typescript ir priimkite duomenis iš template.

Branch: `task-3`

### Užduotis #4 - Validatoriai ir klaidos

- Filmo pavadinimas privalomas.
- Jei pavadinimo nėra - rodome klaidą template.

### Užduotis #5 - API kvietimas

- Dokumentacija: https://developers.themoviedb.org/3/search/search-movies
- Kvieskite `https://api.themoviedb.org/3/search/search-movies` savo serviso `getMovies`metode. Naudokite turimą `api_key`.
- Grąžinkite filmų sąrašą (`response.results`).

Branch: `task-4`

### Užduotis #6 - Filmų parodymas

- Parodykite gautus filmus (jų pavadinimus, arba daugiau) kaip sąrašą savo aplikacijoje.

Branch: `task-5`
