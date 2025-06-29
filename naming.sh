# File path setting
$path = "C:\Users\lee\SnowMuffin-Game-Hub\Space_Engineers\web\public\assets\images\items\MyObjectBuilder_PhysicalGunObject"

# File renaming
Get-ChildItem -Path $path -File | ForEach-Object {
    # Original file name
    $originalName = $_.BaseName
    $extension = $_.Extension

    # Remove '_ingot' and capitalize first character
    $newName = $originalName -replace "Weapon", ""
    $newName = $newName.Substring(0, 1).ToUpper() + $newName.Substring(1)

    # Rename file
    Rename-Item -Path $_.FullName -NewName ("$newName$extension")
}

# Convert .dds files to .png using ImageMagick convert command
$path = "C:\Users\lee\SnowMuffin-Game-Hub\Space_Engineers\web\public\assets\images\items"

# Change to current directory
Set-Location -Path $path

# Convert all .dds files (including subdirectories)
Get-ChildItem -Filter "*.dds" -Recurse | ForEach-Object {
    $inputFile = $_.FullName
    $outputFile = "$($inputFile -replace '\.dds$', '.png')"
    Start-Process -NoNewWindow -Wait -FilePath "magick" -ArgumentList "convert", "`"$inputFile`"", "`"$outputFile`""
}

# Delete all .dds files
$path = "C:\Users\lee\SnowMuffin-Game-Hub\Space_Engineers\web\public\assets\images\items"

# Change to current directory
Set-Location -Path $path

# Delete all .dds files (including subdirectories)
Get-ChildItem -Filter "*.dds" -Recurse | ForEach-Object {
    Remove-Item -Path $_.FullName -Force
}