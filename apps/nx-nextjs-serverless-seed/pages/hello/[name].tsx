import './[name].module.css';

import { useRouter } from 'next/router'

/* eslint-disable-next-line */
export interface NameProps {
  name: string
}


export function Name(props: NameProps) {
  return <p>Hello {props.name}</p>
}

export async function getServerSideProps(context: any) {
  return {
    props: { name: context.params.name }, // will be passed to the page component as props
  }
}

export default Name;
