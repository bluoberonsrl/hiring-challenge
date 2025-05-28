"use client";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import type { Post } from "~/models/post";

export default function Home() {
  return (
    <main className="flex w-full max-w-sm flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Current posts</CardTitle>
          <CardDescription>
            List of the latest posts ordered by creation date.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PostList />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Add a new post</CardTitle>
          <CardDescription>Add a new post to the list.</CardDescription>
        </CardHeader>
        <AddPostForm />
      </Card>
    </main>
  );
}

function PostList() {
  // TODO: Ottieni la lista dei posts dal server usando tRPC
  return <ul className="flex flex-col gap-2">[post list]</ul>;
}

function PostListItem(props: { post: Post }) {
  const { post } = props;
  // TODO: 1. Mostra per ogni post l'id, il titolo e la data di creazione con un minimo di stile
  // TODO: 2. Rendi "focusable" il post e aggiungi un bordo per evidenziare il post focused
  // TODO: 3. Permetti l'eliminazione dei post focused navigando con tastiera e premendo il tasto "Delete" ("Canc")
  return <li>{post.title}</li>;
}

function AddPostForm() {
  // TODO: Implementa un form per aggiungere un nuovo post
  return (
    <>
      <CardContent>[add post form]</CardContent>
      <CardFooter>
        <Button>Add post</Button>
      </CardFooter>
    </>
  );
}
