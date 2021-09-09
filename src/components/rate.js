import { Fragment, useMemo } from 'react';

import style from './rate.module.css';

import { ReactComponent as Star } from './../icons/star.svg';

export default function Rate({ value = 0 }) {
  const stars = useMemo(
    () =>
      Array.from(Array(value).keys()).map(() => (
        <Star className={style.star}></Star>
      )),
    [value]
  );

  return <Fragment>{stars}</Fragment>;
}
