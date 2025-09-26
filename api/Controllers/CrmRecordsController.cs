using System.Runtime.Serialization;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers;

[ApiController]
[Route("[controller]")]
public class CrmRecordsController : ControllerBase
{
    [HttpGet(Name = "GetCrmRecords")]
    public IEnumerable<CrmRecord> Get()
    {
        return
        [
            new CrmRecord
            {
                Id = 1,
                Name = "John Doe",
                Email = "john.doe@example.com",
                Status = CrmRecordStatus.Active,
            },
        ];
    }
}

public class CrmRecord
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public CrmRecordStatus Status { get; set; }
}

[JsonConverter(typeof(JsonStringEnumConverter<CrmRecordStatus>))]
public enum CrmRecordStatus
{
    Active,
    Inactive,
    Pending,
}
