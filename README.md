# iftt-maker-channel

Data provider description.

Example:
```html
<iftt-maker-channel></iftt-maker-channel>
```

It exposes `last-response`, `last-error` and `last-request` as properties that will be updated (as the case may be) once `generateRequest` is called.
Also, It fires `response`, `error` and `request-in-progress`.
