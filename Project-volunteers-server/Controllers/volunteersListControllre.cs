using System.Globalization;
using Microsoft.AspNetCore.Mvc;

namespace Project_volunteers.Controllers;

[ApiController]
[Route("[controller]")]
public class VolunteersListController : ControllerBase
{
    public static  Volunteer[] volunteers = new[]
{
    new Volunteer { Id = 0, FirstName = "Ari", LastName = "Cohen", Tel = "0583275896", Availability = new bool[] { true, true, false, false, false, false } },
    new Volunteer { Id = 1, FirstName = "Beni", LastName = "Levi", Tel = "0581234567", Availability = new bool[] { false, false, false, false, false, false } },
    new Volunteer { Id = 2, FirstName = "David", LastName = "Katz", Tel = "0585598742", Availability = new bool[] { false, false, false, false, false, false } },
    new Volunteer { Id = 3, FirstName = "Michal", LastName = "David", Tel = "0589657489", Availability = new bool[] { false, false, false, false, false, false } },
    new Volunteer { Id = 4, FirstName = "Yosi", LastName = "Mizrachi", Tel = "0556987421", Availability = new bool[] { false, false, false, false, false, false } },
    new Volunteer { Id = 5, FirstName = "Lior", LastName = "Sharabi", Tel = "0583659874", Availability = new bool[] { false, false, false, false, false, false } },
    new Volunteer { Id = 6, FirstName = "Ester", LastName = "Gutman", Tel = "0526985486", Availability = new bool[] { false, false, false, false, false, false } },
    new Volunteer { Id = 7, FirstName = "Tamar", LastName = "Gershoni", Tel = "0537896512", Availability = new bool[] { false, false, false, false, false, false } },
    new Volunteer { Id = 8, FirstName = "Yeal", LastName = "Nesher", Tel = "0556987412", Availability = new bool[] { false, false, false, false, false, false } },
    new Volunteer { Id = 9, FirstName = "Avi", LastName = "Ben Chaim", Tel = "0583659847", Availability = new bool[] { false, false, false, false, false, false } },
    new Volunteer { Id = 10, FirstName = "Yehuda", LastName = "Frid", Tel = "0526987458", Availability = new bool[] { false, false, false, false, false, false } },
    new Volunteer { Id = 11, FirstName = "Elishva", LastName = "Fridman", Tel = "0521447876", Availability = new bool[] { false, false, false, false, false, false } },
    new Volunteer { Id = 12, FirstName = "Neomi", LastName = "Shteren", Tel = "0536981424", Availability = new bool[] { false, false, false, false, false, false } },
    new Volunteer { Id = 13, FirstName = "Ayala", LastName = "Toledano", Tel = "0537849963", Availability = new bool[] { false, false, false, false, false, false } },
    new Volunteer { Id = 14, FirstName = "Chaya", LastName = "Simoni", Tel = "0583272599", Availability = new bool[] { false, false, false, false, false, false } },
    new Volunteer { Id = 15, FirstName = "Ayelet", LastName = "Ben Shitrit", Tel = "0523699696", Availability = new bool[] { false, false, false, false, false, false } },
    new Volunteer { Id = 16, FirstName = "Aharon", LastName = "Ishrael", Tel = "0589981414", Availability = new bool[] { false, false, false, false, false, false } },
    new Volunteer { Id = 17, FirstName = "Galit", LastName = "Shamas", Tel = "0583200547", Availability = new bool[] { false, false, false, false, false, false } },
    new Volunteer { Id = 18, FirstName = "Avigail", LastName = "Braun", Tel = "0589981556", Availability = new bool[] { false, false, false, false, false, false } },
    new Volunteer { Id = 19, FirstName = "Miri", LastName = "Marom", Tel = "0583269588", Availability = new bool[] { false, false, false, false, false, false } },
};
     
    private readonly ILogger<VolunteersListController> _logger;

    public VolunteersListController(ILogger<VolunteersListController> logger)
    {
        _logger = logger;
    }

    [HttpGet()]
    public IEnumerable<Volunteer> Get()
    {
       return volunteers;
    }

[HttpGet("{id}")]
public IActionResult GetById(int id)
{   var defult=new Volunteer { Id = 1, FirstName = "Ari", LastName = "Cohen", Tel = "0583275896", Availability = new bool[] { false, false, false, false, false, false } };
    var volunteer = volunteers.FirstOrDefault(v => v.Id == id);
    if (volunteer == null)
    {
        return default;}
    return Ok(volunteer);
}
[HttpGet("getByDay/{day}")]
public Volunteer[] GetByDay(int day)
{
    var availableVolunteers = volunteers.Where(v => v.Availability[day]).ToArray();

    return availableVolunteers;
}

[HttpPut]
    [Route("update/{id}")]
    public Volunteer[] saveVolunteer(Volunteer v, int id)
    {
    
        volunteers[id] = v;
        Console.WriteLine("update");
       Console.WriteLine(volunteers[id].FirstName);
       return volunteers;


    }
}


