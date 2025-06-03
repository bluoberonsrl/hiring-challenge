# Bluon Hiring Challenge

Benvenuto/a alla Bluon Hiring Challenge! 🚀

## Obiettivo

Il tuo compito è sviluppare un **CRUD completo** (Create, Read, Update, Delete) per gestire i post del blog.

### Cos'è un CRUD?

Un CRUD è un'applicazione che permette di:

- **C**reate: Creare nuovi post
- **R**ead: Visualizzare i post esistenti (lista e dettaglio)
- **U**pdate: Modificare post esistenti
- **D**elete: Eliminare post

## Modello Dati

Il modello `Post` è già definito in `src/models/post.ts` e include:

```typescript
{
  id: string (UUID),
  title: string (max 32 caratteri),
  content: string,
  createdAt: number (timestamp Unix in millisecondi)
}
```

## Specifiche del Progetto

### Funzionalità Richieste

1. **Lista Post**: Pagina principale che mostra tutti i post
2. **Dettaglio Post**: Visualizzazione completa di un singolo post
3. **Creazione Post**: Form per creare un nuovo post
4. **Modifica Post**: Form per modificare un post esistente
5. **Eliminazione Post**: Possibilità di eliminare un post

### Libertà Totale

Hai **piena libertà** su:

- Scelte architetturali e di design
- Gestione dello stato
- Styling e UI/UX
- Routing e navigazione
- Validazione e gestione errori
- Consultazione di risorse online
- Installazione di package aggiuntivi

**Vogliamo vedere come lavori, la tua autonomia e le tue competenze full-stack end-to-end!**

## Stack Tecnologico Disponibile

Il progetto è già configurato con:

- **Next.js 15** con App Router
- **React 19** e **TypeScript**
- **Tailwind** e **shadcn/ui** (ma puoi usare qualsiasi altra libreria di componenti)
- **tRPC** con **TanStack Query** (ma puoi anche non usarli)
- **Zod** per validazione (ma puoi usare anche Valibot o simili)
- **ESLint** con typescript-eslint e setup strict
- **Prettier** con plugin Tailwind
- **Lucide React** per icone

_Esplora il progetto per scoprire tutti i dettagli e le configurazioni disponibili!_

## Bonus Points 🎯

- Utilizzo di tRPC per le API (configurazione base già presente)
- Optimistic updates per UX immediata
- Implementazione di search/filtri avanzati
- Gestione errori robusta
- Skeleton loading states durante il caricamento
- Keyboard shortcuts per power users
- Accessibility (ARIA, keyboard navigation)
- Infinite scroll o paginazione

## Cosa Valutiamo

### Competenze Tecniche

- Qualità del codice e organizzazione
- Utilizzo appropriato delle tecnologie disponibili
- Gestione dello stato e dei dati
- UI/UX e responsiveness

### Soft Skills

- **Autonomia**: Capacità di prendere decisioni tecniche
- **Problem solving**: Come affronti le sfide
- **Creatività**: Soluzioni innovative e user experience
- **Attenzione ai dettagli**: Qualità del risultato finale
