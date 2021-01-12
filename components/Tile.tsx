import Link from "next/link";

const Tile = ({ data }) => {
  return (
    <div className="row">
      <div className="col-md-12 bg-black mt-2">
        <div className="tile white p-2 library-tiles">
          <div className="tile__container u-text-ellipsis">
            <p className="tile__title m-0 u-text-ellipsis">{data.title}</p>
            <p className="tile__subtitle m-0 u-text-ellipsis">
              {data.subtitle}
            </p>
            <span className="info">{data.year}</span>
          </div>
          <div className="tile__buttons">
            {data.links.map((link, idx) => (
              <Link href={link.url} key={idx}>
                <a
                  target="_blank"
                  className="btn btn-dark btn-xsmall uppercase"
                >
                  {link.name == "Github" ? (
                    <span className="icon">
                      <i
                        className="fab fa-wrapper fa-github"
                        aria-hidden="true"
                      ></i>
                    </span>
                  ) : (
                    <span className="icon">
                      <i
                        className="fas fa-wrapper fa-external-link-alt"
                        aria-hidden="true"
                      ></i>
                    </span>
                  )}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tile;
