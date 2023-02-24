import * as React from "react";
import { useLocation, useNavigate, useMatch, Link } from "react-router-dom";

import styles from "./breadcrumbs.module.css";

import { removeRemainingCrumbs } from "../../services/breadcrumbs";
import { ILocation, IState } from "../../services/types/types";

const Crumb = ({
  url,
  title,
}: {
  pathname: string;
  url: string;
  title: string;
}) => {
  const location: ILocation = useLocation();
  const state: Array<IState> | unknown = location.state;
  const navigate = useNavigate();
  let match = useMatch(`${url}`);

  return (
    <span>
      {match ? (
        title
      ) : (
        <>
          <Link
            to="/"
            className={styles.breadCrumbsLink}
            state={removeRemainingCrumbs(state, url)}
          >
            {title}
          </Link>
          {` / `}
        </>
      )}
    </span>
  );
};

const Breadcrumbs = () => {
  const location: ILocation = useLocation();
  const state = location.state as IState[];
  if (state) {
    return (
      <nav className={styles.breadCrumbs}>
        {state.map((crumb: IState, index: number, arr: IState[]) => (
          <Crumb {...crumb} key={crumb.url} />
        ))}
      </nav>
    );
  }
  return null;
};

export { Breadcrumbs };
