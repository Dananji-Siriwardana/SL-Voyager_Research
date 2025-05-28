import React from "react";

function TechnologyUsed() {
  const technologies = [
    {
      name: "Machine Learning",
      image:
        "https://img.icons8.com/?size=100&id=62903&format=png&color=000000",
    },
    {
      name: "NLP",
      image:
        "https://img.icons8.com/?size=100&id=aHClp8f4SBQL&format=png&color=000000",
    },
    {
      name: "Python",
      image:
        "https://samitha-vidhanaarachchi.github.io/Research-Website/Images/tech/python.png",
    },
    {
      name: "Flask",
      image:
        "https://images.g2crowd.com/uploads/product/image/small_square/small_square_fa7be4026d11b111b7f256098497c49a/flask.png",
    },
    {
      name: "HTML",
      image:
        "https://img.icons8.com/?size=100&id=1043&format=png&color=000000",
    },
    {
      name: "Open Weather Map",
      image:
        "https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png",
    },
    {
      name: "BeautifulSoup",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAaVBMVEX///8AAAD09PRlZWXU1NQ6OjqRkZFJSUkhISH8/Pz4+Pivr6+VlZUVFRUbGxsZGRne3t7Gxsbq6uozMzNERES+vr5YWFiGhoZ3d3ejo6OpqamdnZ1fX1/Nzc22trYsLCwMDAxQUFBvb28RpUcTAAAETklEQVRoge2aC5eyIBCGwUxDzfAWpmnm//+RHwPipdR2a2X3O4f3nN20hIfLDDOoCBkZGRkZGRkZGRn9zyKeR/RTPeo7eV5GsWYuZTcstKs9nVw7xUpHppEbH/FI+sjkDD291nZVip5nusD1CeOwFBZNdxx81jTNJIfx7TyJuhjfIj3g+IpxUqmzgLei1AMGk772/ltzQws0gffcfS11Vt309XgCtsokp78B5ountXLxhmB9MmADNuA/BZ5kiYR8LWn8HExLlqkKvIq5yZ75ixXafuR9BI5tFdHi25AweZcugSqWGon76PcemO72KpbWgiSPo0MHviyUg3h/+ARc8Ap8eWgBqBWHxIHjPPKLpQqdD8EkGMDIC/JaHkE2s56mfgr22Ag8GDHd4xcJzKdgazcCD7LDlen9EbDIxZ8TcMpt61h/BO6/oM5l2MnVDNJRz2dir3V2mBhWr2A2FLkwyJSbM2MFkSWHan1WrYKJleVpeGgR9qWbg8mm4+bWyn+GDU/LP235qxLPF2P+4aqSYBLRCpiqwohPlbCZCM7U1gLG1yEoGxGgy40k+cO3p+yhZKqMbh4M+wgoJsAn2oOtKdjKCumvxYX7K0EnWatlZ8UR9ptRVvFGZyMwWQfHd7EURHYUILWhmAPzimAcuVVLRwp75xXG1Rm7BHeuBj0KyBKYidmBRhIA38kiGHVg1IOl89rHR/BXehzBXKndG9jUG+BwHizneKnHEFgOaqf4XTB7H2yBV/S7t++CnfeHOk7AUNFLsLcy1G8ZFz3hUWT5gz1eAz/3uLtkbY5FLO3Xzjkwub8a6ifj6kzGWwN78N3efgDbULy7UZEdhh6P49+8H4uS9qjkoh+LJqrKFBgO5FKCKIx012PrNpqX+ZVLZEQ7WRKGatmPhT810QMYvsTMprQW3K7H4tpb4Bc1WerxpGSz1mNUwYAcCn5pBuBEtlbc5Uzu3CECtwf3oajhceg4WPVojlHV9CXZfgwOH8HSknB6dhsAX+XvUdgxGALzqyVY5D6dhYHlyGwEwky/+KFM3apkImERDYJYfn4Ci2MhlLmtWsQsJ02StAU7ad2gTypKN0kS14fk4Xq/dAuFvbuPMp+YiZJUlCylawVuHj+D+VkO9aVoIhJbM7cZSRy/vL3Nr1m8QfmYc0F9Wm7V/9fbVAP+22C6Lbg6uwvaN1uCaYLXtB24Ov4S2OY9bk6nE+Z/R/Gv6f6F0KR2s6UKQvE+o3MqRiH952XxnWs4v2MO+mi6iWCbwOYCBSSXh2rmhx9SxBOJ21z9RZ/kbCMCGUP73OX45e2STzXJIQdBNtNs+zBRJH2X6aDKzGnjx6exeEbLxk+zqitesrmfVCXI97JDE9sRmetu+/cCIrlgp7ugqAt2lmdXHe8jyE3IRLoezJf3MbW5anssj+Ki7d68wCmrtSYeFq38S1nUFdX6yocQQVoydiMjIyMjIyMjI6OJ/gGNU0CRq+lywQAAAABJRU5ErkJggg==",
    },
    {
      name: "Pexels",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAANlBMVEVHcEwZGRkZGRkZGRkZGRkXFxcPDw8AAABVVVXPz8/////j4+N4eHigoKBBQUG4uLiVlZXy8vI6eK4DAAAABXRSTlMAatn/xWyC1CQAAACxSURBVHgBrdNFAsJAEETRGq2JJ/e/LKPxZpWP9wPiAJQ2L2mFmDVCFlBGTOH6n857Z1oaZ/JkCIY0tTMydH1sGOkeyKmvdVXxYkmv6Oc8HcclvY68INNwZSyk5d5wa6P8NeNO6BgnU8Exvg3+D84Spq2lS8hWxtS6bwumVhql16FvizTo35poJEwm4LbM1a4rtDLnTUNXqpsS3zR5385PUMuooWRUgJXQIqZ0w5XXy+EHUvoRJb4sHKIAAAAASUVORK5CYII=",
    },
    {
      name: "Streamlit",
      image:
        "https://img.icons8.com/?size=100&id=9pAKclTpHTMC&format=png&color=000000"},
    {
      name: "JavaScript",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    },
    {
      name: "Firebase",
      image:
        "https://img.icons8.com/?size=100&id=62452&format=png&color=000000",
    },
    {
      name: "SQLite",
      image:
        "https://img.icons8.com/?size=100&id=VMRAbKfEzssG&format=png&color=000000",
    },
    {
      name: "GitHub",
      image:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    },
    {
      name: "VS Code",
      image:
        "https://ih1.redbubble.net/image.1470587088.2816/st,small,507x507-pad,600x600,f8f8f8.jpg",
    },
    {
      name: "Plotly",
      image:
        "https://cdn.brandfetch.io/idwPNp71Xw/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1748088362692",
    },
    {
      name: "ChatterBot",
      image: "https://img.icons8.com/?size=100&id=cJPzCOI3zeyd&format=png&color=000000",
    },
  ];

  return (
    <section className="mt-5" id="Technologies">
      <h1 style={{ marginLeft: "8%" }}>Technologies Used</h1>

      <div className=" mt-5" style={{ marginLeft: "10%", marginRight: "10%" }}>
        <div className="row row-cols-md-12">
          {technologies.map((technology) => (
            <div className="col-xs-12 col-sm-2">
              <div
                className="card d-flex flex-column h-100 mb-4"
                style={{ border: "0", marginLeft: "25%" }}
              >
                <a className="img-card" href="tecImg">
                  <img
                    src={technology?.image}
                    alt=""
                    style={{
                      padding: "30px",
                      width: "100%",
                      borderRadius: "50%",
                      boxShadow: "1px 1px 10px 1px #D4D4D4",
                    }}
                  />
                </a>
                <div className="card-content">
                  <h4
                    className="card-title mb-3 mt-3"
                    style={{ fontSize: "16px" }}
                  >
                    {" "}
                    {technology?.name}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnologyUsed;
