// If we want to mock redux store, here is a way to update store in jest UT
describe('update redux store', () => {
  
  const mockStore = configureStore({
      reducer: {
      storeName: reduxSlice?.reducer,
    }
  });

  const renderComp = () => {
    render(
      <Provider store={mockStore}>
        <Router>
          <Component />
        </Router>
      </Provider>
    )
  }
  
  it ("should update redux store", async () => {

    // sample mock data
    const mockData = { state: 200, data: { success: "ok" } };
    
    // in case your reduxAsyncthunk is calling an API so mock it here
    jest.spyOn(httpMethods, 'fetchData').mockReturnValue(mockData);

    renderComp();

    // this is how we can dispatch manually in jest when the component is rendered
    await mockStore.dispatch(fetchData(params));
    
    expect(data).toBeInTheDocument();

    // to get the value of store, we can use the following
    const storeValue = mockStore.getState();
    // here you can now access redux store..
  });

  it( "if you want to mock fetch API", () => {

    // you fetch can be mock like this way
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: () => Promise.resolve({ success: true, status: 200 }),
    });
  });
});
