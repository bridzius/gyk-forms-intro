# GYK'22 - Angular Routing 101

## Tasks

### Task #1 - empty app
* Generate new Angular project with routing enabled

Branch: `task-1`

### Task #2 - menu structure
* Add html menu structure to the `app.component.html` for menu items: Home, News, Movies, TV Shows and Celebs

Branch: `task-2`

### Task #3 - components
* Generate new components for Home, News, Movies, TV Shows and Celebs

Example:
```bash
npx ng g c components/home
```

Branch: `task-3`

### Task #4 - defining routes
* Add routing to the `app-routing.module.ts` got paths: home, news, movies, tv-shows and celebs
* Add `router-outlet` to the `app.component.html`. This will be used to display the content of routed components.
* Use `routerLink` directive to navigate between routes
* Make sure empty route redirects to home

Branch: `task-4`

### Task #5 - handling "not-found" routes
* Generate new not-found component
* Add routing to the `app-routing.module.ts` for "everything else" path `**`

Branch: `task-5`

### Task #6 - listening route changes
* Generate new component for single movie `npx ng g c components/movie`
* Add routing to the `app-routing.module.ts` for path `movies/:id`
* Add links to 5 movies in the `movies.component.html`
* Use `ActivatedRoute` to get the `id` parameter from the route in the `movie.component.ts`
* Display the `id` in the `movie.component.html`

Branch: `task-6`
