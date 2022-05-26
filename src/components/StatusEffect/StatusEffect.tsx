import type { TStatusEffect } from "./";

export function StatusEffect(Tstatus: TStatusEffect) {
  const { status } = Tstatus;
  const { language } = Tstatus;
  console.log(Tstatus.status, "Effect");
  
  return (
    <>
      <div className="buffs-container">
        <div className="title-buffs">
          <h2>{status.buffs[language][0].title}</h2>
          <p>{status.buffs[language][0].description}</p>
        </div>
        <div className="buffs">
          <div className="itens-buffs">
            <div className="itens-buffs-content">
              <img
                src={status.buffs[language][1].graphiURL}
                alt=""
              />
              <div className="itens-buffs-content-description">
                <div className="itens-buffs-content-title">
                  <h3>{status.buffs[language][1].title}</h3>
                </div>
                <p>{status.buffs[language][1].description}</p>
              </div>
            </div>
          </div>
          <div className="itens-buffs">
            <div className="itens-buffs-content">
              <img
                src={status.buffs[language][2].graphiURL}
                alt=""
              />
              <div className="itens-buffs-content-description">
                <div className="itens-buffs-content-title">
                  <h3>{status.buffs[language][2].title}</h3>
                </div>
                <p>{status.buffs[language][2].description}</p>
              </div>
            </div>
          </div>
          <div className="itens-buffs">
            <div className="itens-buffs-content">
              <img
                src={status.buffs[language][3].graphiURL}
                alt=""
              />
              <div className="itens-buffs-content-description">
                <div className="itens-buffs-content-title">
                  <h3>{status.buffs[language][3].title}</h3>
                </div>
                <p>{status.buffs[language][3].description}</p>
              </div>
            </div>
          </div>
          <div className="itens-buffs">
            <div className="itens-buffs-content">
              <img
                src={status.buffs[language][4].graphiURL}
                alt=""
              />
              <div className="itens-buffs-content-description">
                <div className="itens-buffs-content-title">
                  <h3>{status.buffs[language][4].title}</h3>
                </div>
                <p>{status.buffs[language][4].description}</p>
              </div>
            </div>
          </div>
          <div className="itens-buffs">
            <div className="itens-buffs-content">
              <img
                src={status.buffs[language][5].graphiURL}
                alt=""
              />
              <div className="itens-buffs-content-description">
                <div className="itens-buffs-content-title">
                  <h3>{status.buffs[language][5].title}</h3>
                </div>
                <p>{status.buffs[language][5].description}</p>
              </div>
            </div>
          </div>
          <div className="itens-buffs">
            <div className="itens-buffs-content">
              <img
                src={status.buffs[language][6].graphiURL}
                alt=""
              />
              <div className="itens-buffs-content-description">
                <div className="itens-buffs-content-title">
                  <h3>{status.buffs[language][6].title}</h3>
                </div>
                <p>{status.buffs[language][6].description}</p>
              </div>
            </div>
          </div>
          <div className="itens-buffs">
            <div className="itens-buffs-content">
              <img
                src={status.buffs[language][7].graphiURL}
                alt=""
              />
              <div className="itens-buffs-content-description">
                <div className="itens-buffs-content-title">
                  <h3>{status.buffs[language][7].title}</h3>
                </div>
                <p>{status.buffs[language][7].description}</p>
              </div>
            </div>
          </div>
          <div className="itens-buffs">
            <div className="itens-buffs-content">
              <img
                src={status.buffs[language][8].graphiURL}
                alt=""
              />
              <div className="itens-buffs-content-description">
                <div className="itens-buffs-content-title">
                  <h3>{status.buffs[language][8].title}</h3>
                </div>
                <p>{status.buffs[language][8].description}</p>
              </div>
            </div>
          </div>
          <div className="itens-buffs">
            <div className="itens-buffs-content">
              <img
                src={status.buffs[language][9].graphiURL}
                alt=""
              />
              <div className="itens-buffs-content-description">
                <div className="itens-buffs-content-title">
                  <h3>{status.buffs[language][9].title}</h3>
                </div>
                <p>{status.buffs[language][9].description}</p>
              </div>
            </div>
          </div>
          <div className="itens-buffs">
            <div className="itens-buffs-content">
              <img
                src={status.buffs[language][10].graphiURL}
                alt=""
              />
              <div className="itens-buffs-content-description">
                <div className="itens-buffs-content-title">
                  <h3>{status.buffs[language][10].title}</h3>
                </div>
                <p>{status.buffs[language][10].description}</p>
              </div>
            </div>
          </div>
          <div className="itens-buffs">
            <div className="itens-buffs-content">
              <img
                src={status.buffs[language][11].graphiURL}
                alt=""
              />
              <div className="itens-buffs-content-description">
                <div className="itens-buffs-content-title">
                  <h3>{status.buffs[language][11].title}</h3>
                </div>
                <p>{status.buffs[language][11].description}</p>
              </div>
            </div>
          </div>
          <div className="itens-buffs">
            <div className="itens-buffs-content">
              <img
                src={status.buffs[language][12].graphiURL}
                alt=""
              />
              <div className="itens-buffs-content-description">
                <div className="itens-buffs-content-title">
                  <h3>{status.buffs[language][12].title}</h3>
                </div>
                <p>{status.buffs[language][12].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="buffs-container">
        <div className="title-buffs">
          <h2>{status.debuffs[language][0].title}</h2>
          <p>{status.debuffs[language][0].description}</p>
        </div>
        <div className="buffs">
          <div className="itens-buffs">
            <div className="itens-buffs-content">
              <img
                src={status.debuffs[language][1].graphiURL}
                alt=""
              />
              <div className="itens-buffs-content-description">
                <div className="itens-buffs-content-title">
                  <h3>{status.debuffs[language][1].title}</h3>
                </div>
                <p>{status.debuffs[language][1].description}</p>
              </div>
            </div>
          </div>
          <div className="itens-buffs">
            <div className="itens-buffs-content">
              <img
                src={status.debuffs[language][2].graphiURL}
                alt=""
              />
              <div className="itens-buffs-content-description">
                <div className="itens-buffs-content-title">
                  <h3>{status.debuffs[language][2].title}</h3>
                </div>
                <p>{status.debuffs[language][2].description}</p>
              </div>
            </div>
          </div>
          <div className="itens-buffs">
            <div className="itens-buffs-content">
              <img
                src={status.debuffs[language][3].graphiURL}
                alt=""
              />
              <div className="itens-buffs-content-description">
                <div className="itens-buffs-content-title">
                  <h3>{status.debuffs[language][3].title}</h3>
                </div>
                <p>{status.debuffs[language][3].description}</p>
              </div>
            </div>
          </div>
          <div className="itens-buffs">
            <div className="itens-buffs-content">
              <img
                src={status.debuffs[language][4].graphiURL}
                alt=""
              />
              <div className="itens-buffs-content-description">
                <div className="itens-buffs-content-title">
                  <h3>{status.debuffs[language][4].title}</h3>
                </div>
                <p>{status.debuffs[language][4].description}</p>
              </div>
            </div>
          </div>
          <div className="itens-buffs">
            <div className="itens-buffs-content">
              <img
                src={status.debuffs[language][5].graphiURL}
                alt=""
              />
              <div className="itens-buffs-content-description">
                <div className="itens-buffs-content-title">
                  <h3>{status.debuffs[language][5].title}</h3>
                </div>
                <p>{status.debuffs[language][5].description}</p>
              </div>
            </div>
          </div>
          <div className="itens-buffs">
            <div className="itens-buffs-content">
              <img
                src={status.debuffs[language][6].graphiURL}
                alt=""
              />
              <div className="itens-buffs-content-description">
                <div className="itens-buffs-content-title">
                  <h3>{status.debuffs[language][6].title}</h3>
                </div>
                <p>{status.debuffs[language][6].description}</p>
              </div>
            </div>
          </div>
          <div className="itens-buffs">
            <div className="itens-buffs-content">
              <img
                src={status.debuffs[language][7].graphiURL}
                alt=""
              />
              <div className="itens-buffs-content-description">
                <div className="itens-buffs-content-title">
                  <h3>{status.debuffs[language][7].title}</h3>
                </div>
                <p>{status.debuffs[language][7].description}</p>
              </div>
            </div>
          </div>
          <div className="itens-buffs">
            <div className="itens-buffs-content">
              <img
                src={status.debuffs[language][8].graphiURL}
                alt=""
              />
              <div className="itens-buffs-content-description">
                <div className="itens-buffs-content-title">
                  <h3>{status.debuffs[language][8].title}</h3>
                </div>
                <p>{status.debuffs[language][8].description}</p>
              </div>
            </div>
          </div>
          <div className="itens-buffs">
            <div className="itens-buffs-content">
              <img
                src={status.debuffs[language][9].graphiURL}
                alt=""
              />
              <div className="itens-buffs-content-description">
                <div className="itens-buffs-content-title">
                  <h3>{status.debuffs[language][9].title}</h3>
                </div>
                <p>{status.debuffs[language][9].description}</p>
              </div>
            </div>
          </div>
          <div className="itens-buffs">
            <div className="itens-buffs-content">
              <img
                src={status.debuffs[language][10].graphiURL}
                alt=""
              />
              <div className="itens-buffs-content-description">
                <div className="itens-buffs-content-title">
                  <h3>{status.debuffs[language][10].title}</h3>
                </div>
                <p>{status.debuffs[language][10].description}</p>
              </div>
            </div>
          </div>
          <div className="itens-buffs">
            <div className="itens-buffs-content">
              <img
                src={status.debuffs[language][11].graphiURL}
                alt=""
              />
              <div className="itens-buffs-content-description">
                <div className="itens-buffs-content-title">
                  <h3>{status.debuffs[language][11].title}</h3>
                </div>
                <p>{status.debuffs[language][11].description}</p>
              </div>
            </div>
          </div>
          <div className="itens-buffs">
            <div className="itens-buffs-content">
              <img
                src={status.debuffs[language][12].graphiURL}
                alt=""
              />
              <div className="itens-buffs-content-description">
                <div className="itens-buffs-content-title">
                  <h3>{status.debuffs[language][12].title}</h3>
                </div>
                <p>{status.debuffs[language][12].description}</p>
              </div>
            </div>
          </div>
          <div className="itens-buffs">
            <div className="itens-buffs-content">
              <img
                src={status.debuffs[language][13].graphiURL}
                alt=""
              />
              <div className="itens-buffs-content-description">
                <div className="itens-buffs-content-title">
                  <h3>{status.debuffs[language][13].title}</h3>
                </div>
                <p>{status.debuffs[language][13].description}</p>
              </div>
            </div>
          </div>
          <div className="itens-buffs">
            <div className="itens-buffs-content">
              <img
                src={status.debuffs[language][14].graphiURL}
                alt=""
              />
              <div className="itens-buffs-content-description">
                <div className="itens-buffs-content-title">
                  <h3>{status.debuffs[language][14].title}</h3>
                </div>
                <p>{status.debuffs[language][14].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="neutral-container">
        <div className="title-neutral">
          <h2>{status.neutral[language][0].title}</h2>
          <p>{status.neutral[language][0].description}</p>
        </div>
        <div className="neutral">
          <div className="itens-neutral">
            <div className="itens-container-neutral">
              <img
                src={status.neutral[language][1].graphiURL}
                alt=""
              />
              <div className="itens-neutral-content">
                <div className="itens-neutral-content-title">
                  <h3>{status.neutral[language][1].title}</h3>
                </div>
                <p>
                {status.neutral[language][1].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
