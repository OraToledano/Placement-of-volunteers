using System.Globalization;
using Microsoft.AspNetCore.Mvc;

namespace Project_volunteers.Controllers;

[ApiController]
[Route("[controller]")]
public class SchdulingController : ControllerBase
{
    public static  Volunteer[] scheduleForWeek = {
        null,null,null,null,null,null
    };
 
    private readonly ILogger<VolunteersListController> _logger;

    public SchdulingController(ILogger<VolunteersListController> logger)
    {
        _logger = logger;
    }
   
    [HttpGet()]
    public Volunteer[] Get()
    {
       return scheduleForWeek ;
    }

    [HttpPut("updateSchedule")]

    public Volunteer[] Put(Volunteer[] updatedSchedule)
{   
    for (int i = 0; i < scheduleForWeek.Length; i++)
    {
        scheduleForWeek[i] = updatedSchedule[i];
    }
    return scheduleForWeek;
}

}


