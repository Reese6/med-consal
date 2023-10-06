import cn from "classnames";
import { Container } from "../../components/container";
import "./style.css";

const devStack = [
  { link: "/technologies/logos/dev/airflow.svg", text: "" },
  { link: "/technologies/logos/dev/c.png", text: "" },
  { link: "/technologies/logos/dev/js.png", text: "JavaScript" },
  { link: "/technologies/logos/dev/kafka.svg", text: "" },
  { link: "/technologies/logos/dev/python.svg", text: "" },
  { link: "/technologies/logos/dev/rabbitmq.svg", text: "" },
  { link: "/technologies/logos/dev/reactjs.svg", text: "" },
  { link: "/technologies/logos/dev/ts.svg", text: "TypeScript" },
  { link: "/technologies/logos/dev/vue.svg", text: "" },
];
const devStackGroup = [devStack, devStack];

const dbStack = [
  { link: "/technologies/logos/db/elastic.svg", text: "" },
  { link: "/technologies/logos/db/hadoop.svg", text: "" },
  { link: "/technologies/logos/db/mongodb.svg", text: "" },
  { link: "/technologies/logos/db/ms-sql.svg", text: "" },
  { link: "/technologies/logos/db/mysql.svg", text: "" },
  { link: "/technologies/logos/db/postgresql.svg", text: "" },
  { link: "/technologies/logos/db/redis.svg", text: "" },
];
const dbStackGroup = [dbStack, dbStack];

const analysisStack = [
  { link: "/technologies/logos/analysis/anaconda.png", text: "" },
  { link: "/technologies/logos/analysis/hiclipar.png", text: "" },
  { link: "/technologies/logos/analysis/orange.png", text: "" },
  { link: "/technologies/logos/analysis/power.svg", text: "" },
  { link: "/technologies/logos/analysis/sql-ms.png", text: "" },
  { link: "/technologies/logos/analysis/superset.png", text: "" },
  { link: "/technologies/logos/analysis/tableau.png", text: "" },
];
const analysisStackGroup = [analysisStack, analysisStack];

const rows = [
  { title: "Инструменты разработки", row: devStackGroup, reverse: false },
  { title: "СУБД", row: dbStackGroup, reverse: true },
  { title: "Анализ данных", row: analysisStackGroup, reverse: false },
];

const Stack = () => {
  return (
    <div className="slide-container">
      {rows.map((item) => (
        <>
          <Container>
            <div className="text-2xl lg:text-3xl mb-6 text-slate-700 font-bold">{item.title}</div>
          </Container>
          <div className="slide-row mb-10">
            {item.row.map((row, i) => (
              <div key={i} className={cn("slide-chunk", item.reverse && "slide-chunk-reverse")}>
                {row.map((item, i) => (
                  <div key={i} className="flex bg-slate-50 rounded-2xl py-8 px-14 shadow-md">
                    <div className="w-64 h-24 flex items-center justify-center gap-7">
                      <img
                        src={item.link}
                        alt=""
                        className="max-w-[192px] max-h-20 h-full w-full object-contain object-center"
                      />
                      {item.text && (
                        <span className="text-2xl text-slate-500 font-medium">{item.text}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default Stack;
