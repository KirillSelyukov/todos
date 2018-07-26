using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace todos_server.Controllers
{
	[Route("api/[controller]")]
	public class TodosController : Controller
	{
		// GET api/values
		[HttpGet]
		public string Get()
		{
			HttpClient client = new HttpClient();
			Task<HttpResponseMessage> respons = client.GetAsync(new Uri("https://todos-bbc0e.firebaseio.com/tasks.json"));
			HttpResponseMessage result = respons.Result;
			string data = result.Content.ReadAsStringAsync().Result;
			return data;
		}

		// GET api/values/5
		[HttpGet("{id}")]
		public string Get(int id)
		{
			return "value";
		}

		// POST api/values
		[HttpPost]
		public void Post([FromBody] string value)
		{
		}

		// PUT api/values/5
		[HttpPut("{id}")]
		public void Put(int id, [FromBody] string value)
		{
		}

		// DELETE api/values/5
		[HttpDelete("{id}")]
		public void Delete(int id)
		{
		}
	}
}