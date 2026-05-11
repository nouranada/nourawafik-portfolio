import { notFound } from 'next/navigation';

export default function NotFoundCatchAll(): never {
  notFound();
}
