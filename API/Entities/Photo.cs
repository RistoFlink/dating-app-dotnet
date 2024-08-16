namespace API.Entities;

public class Photo
{
    public int Id { get; set; }
    
    public required string URL { get; set; }
    
    public bool IsMain { get; set; }
    
    public string PublicId { get; set; }
}