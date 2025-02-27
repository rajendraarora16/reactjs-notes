import React from "react";

export default function App() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const fetchData = async () => {
    setLoading(true);
    const fetchData = await fetch("https://api.npoint.io/62d53ad0987235c1189e");
    if (!fetchData.ok) return "Error";

    const fetchJson = await fetchData.json();
    setData(fetchJson);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const Folder = ({ data }) => {
    const [isExpand, setIsExpand] = React.useState(false);

    return (
      <div style={{ marginLeft: "40px" }}>
        <div
          onClick={() => setIsExpand(!isExpand)}
          style={{ cursor: "pointer" }}
        >
          {data?.name}
        </div>
        {isExpand &&
          data?.children &&
          data?.children?.map((item) => {
            if (item?.children) {
              return <Folder key={item?.id} data={item} />;
            } else {
              return <div>{item?.fileName}</div>;
            }
          })}
        {data?.fileName && <div>{data?.fileName}</div>}
      </div>
    );
  };

  if (loading) return "Loading...";

  return (
    <div className="App">
      {data?.map((item) => {
        console.log("item: ", item);
        return <Folder key={item?.id} data={item} />;
      })}
    </div>
  );
}

// Json Data:

/**
 * 
[
    {
        "id": 1,
        "name": "src",
        "children": [
            {
                "id": 2,
                "name": "pages",
                "children": [
                    {
                        "id": 3,
                        "name": "Promotions",
                        "children": [
                            {
                                "id": 4,
                                "name": "ListView",
                                "children": [
                                    {
                                        "id": 5, 
                                        "fileName": "listView.tsx"
                                    },
                                    {
                                        "id": 6, 
                                        "fileName": "listView.css"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": 7,
                        "name": "Reports",
                        "children": [
                            {
                                "id": 8, 
                                "fileName": "reports.tsx",
                            },
                            {
                                "id": 9, 
                                "fileName": "reports.css"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": 10,
        "fileName": "index.html",
    },
    {
        "id": 11,
        "fileName": "jest.config.ts"
    }
]
 */
