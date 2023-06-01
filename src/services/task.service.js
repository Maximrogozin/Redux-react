import httpService from "./http.service";
const todosEndpoint = "todos/";

const taskService = {
  fetch: async () => {
    const { data } = await httpService.post(todosEndpoint, {
      //   title,
      //   completed,
    });
    return data;
  },
};

export default taskService;
