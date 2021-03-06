﻿using System;
using System.Collections.Generic;

namespace Jukebox.WebApi.Core.Common
{
    public class EntityNotFoundException : Exception
    {
    }

    public class ValidationFailedException : InvalidOperationException
    {
        public ValidationFailedException(IList<string> validationErrors)
            : base()
        {
            ValidationErrors = validationErrors;
        }

        public IList<string> ValidationErrors { get; private set; }
    }
    
    public class ResourceForbiddenException : Exception
    {
    }
}
