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
          <span role="img" aria-label="camera"></span>Spensa Auction Items
        </a>
      </h2>
      <nav>
        <ul className="flex-wrap">
          <li className={currentPage === "Item#1" ? "currentPage" : ""}>
            <a data-testid="Item#1" href="Item#1" onClick={() => setCurrentPage("Item#1")}>
              Item #1
            </a>
          </li>
          <li className={currentPage === "Item#2" ? "currentPage" : ""}>
            <a data-testid="Item#2" href="Item#2" onClick={() => setCurrentPage("Item#2")}>
            Item #2
            </a>
          </li>
          <li className={currentPage === "Item#3" ? "currentPage" : ""}>
            <a data-testid="Item#3" href="Item#3" onClick={() => setCurrentPage("Item#3")}>
            Item #3
            </a>
          </li>
          <li className={currentPage === "Item#4" ? "currentPage" : ""}>
            <a data-testid="Item#4" href="Item#4" onClick={() => setCurrentPage("Item#4")}>
            Item #4
            </a>
          </li>
          <li className={currentPage === "Item#5" ? "currentPage" : ""}>
            <a data-testid="Item#5" href="Item#5" onClick={() => setCurrentPage("Item#5")}>
            Item #5
            </a>
          </li>
          <li className={currentPage === "Item#6" ? "currentPage" : ""}>
            <a data-testid="Item#6" href="Item#6" onClick={() => setCurrentPage("Item#6")}>
            Item #6
            </a>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Nav;
