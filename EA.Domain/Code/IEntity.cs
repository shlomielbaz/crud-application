using System.ComponentModel.DataAnnotations;

namespace EA.Domain
{
    public class IEntity
	{
		[ScaffoldColumn(false)]
		[Key]
		public int ID { get; set; }
	}
}
