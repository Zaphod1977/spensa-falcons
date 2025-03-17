import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    currentPage, setCurrentPage
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage);
  }, [currentPage]);

  return (
    <header className="flex-row px-1 space">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"></span>Zaphod Bobbybrox
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className={currentPage === "Item#1" ? "currentPage" : ""}>
            <a data-testid="Item#1" href="Item#1" onClick={() => setCurrentPage("Item#1")}>
              Meet & Greet
            </a>
          </li>
          <li className={currentPage === "Item#2" ? "currentPage" : ""}>
            <a data-testid="Item#2" href="Item#2" onClick={() => setCurrentPage("Item#2")}>
              Ideas in writing
            </a>
          </li><li className={currentPage === "Item#3" ? "currentPage" : ""}>
            <a data-testid="Item#3" href="Item#3" onClick={() => setCurrentPage("Item#3")}>
              Photography
            </a>
          </li><li className={currentPage === "Item#4" ? "currentPage" : ""}>
            <a data-testid="Item#4" href="Item#4" onClick={() => setCurrentPage("Item#4")}>
              Mak'r
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
