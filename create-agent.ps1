<#
.SYNOPSIS
    Scaffolds a new agent project from the Master Agent template.

.DESCRIPTION
    This script copies the Master Agent template structure to a new directory,
    initializes the .env file, and prepares the workspace for a fresh agent.

.PARAMETER Name
    The name of the new agent project (will be created as a sibling directory).

.EXAMPLE
    .\create-agent.ps1 -Name "MyNewAgent"
#>

param (
    [Parameter(Mandatory = $true)]
    [string]$Name
)

$ErrorActionPreference = "Stop"

$SourceDir = $PSScriptRoot
$ParentDir = Split-Path -Path $SourceDir -Parent
$TargetDir = Join-Path -Path $ParentDir -ChildPath $Name

# 1. Check if target already exists
if (Test-Path -LiteralPath $TargetDir) {
    Write-Error "Target directory '$TargetDir' already exists. Aborting to prevent overwrite."
    exit 1
}

Write-Host "Initialising new agent project: $Name" -ForegroundColor Cyan
Write-Host "   Source: $SourceDir" -ForegroundColor Gray
Write-Host "   Target: $TargetDir" -ForegroundColor Gray

# 2. Create target directory
New-Item -ItemType Directory -Path $TargetDir -Force | Out-Null

# 3. Copy all files/folders recursively
# Exclude the script itself and any git artifacts from the template
# Using simple loop to avoid pipeline issues
$Items = Get-ChildItem -Path $SourceDir -Exclude ".git", "create-agent.ps1", ".vs", "bin", "obj"

foreach ($Item in $Items) {
    Copy-Item -Path $Item.FullName -Destination $TargetDir -Recurse -Force
}

# 4. Initialize .env from .env.example
$EnvPath = Join-Path -Path $TargetDir -ChildPath ".env"
$EnvExamplePath = Join-Path -Path $TargetDir -ChildPath ".env.example"

if (Test-Path -Path $EnvExamplePath) {
    Copy-Item -Path $EnvExamplePath -Destination $EnvPath
    Write-Host "   Created .env from template" -ForegroundColor Green
}

# 5. Success Message
Write-Host ""
Write-Host "Agent '$Name' created successfully!" -ForegroundColor Green
Write-Host "   Path: $TargetDir" -ForegroundColor White
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Cyan
Write-Host "1. cd '$TargetDir'" -ForegroundColor Yellow
Write-Host "2. code . (or open in your editor)" -ForegroundColor Yellow
Write-Host "3. Edit .env with your real API keys" -ForegroundColor Yellow
Write-Host "4. Start a new chat session" -ForegroundColor Yellow
