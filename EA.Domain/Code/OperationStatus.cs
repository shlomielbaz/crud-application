using System;
namespace EA.Domain
{
    public class OperationStatus
    {
        public bool Status { get; set; }

        public object Model { get; set; }

        public string Message { get; set; }

        public Exception Exception { get; set; }
    }
}
