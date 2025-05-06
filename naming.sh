# 파일 경로 설정
$path = "C:\Users\lee\SnowMuffin-Game-Hub\Space_Engineers\web\public\assets\images\items\MyObjectBuilder_PhysicalGunObject"

# 파일 이름 변경
Get-ChildItem -Path $path -File | ForEach-Object {
    # 원래 파일 이름
    $originalName = $_.BaseName
    $extension = $_.Extension

    # '_ingot' 제거 및 첫 문자 대문자로 변경
    $newName = $originalName -replace "Weapon", ""
    $newName = $newName.Substring(0, 1).ToUpper() + $newName.Substring(1)

    # 파일 이름 변경
    Rename-Item -Path $_.FullName -NewName ("$newName$extension")
}

# ImageMagick의 convert 명령을 사용하여 .dds 파일을 .png로 변환
$path = "C:\Users\lee\SnowMuffin-Game-Hub\Space_Engineers\web\public\assets\images\items"

# 현재 디렉토리로 이동
Set-Location -Path $path

# 모든 .dds 파일을 변환 (하위 디렉토리 포함)
Get-ChildItem -Filter "*.dds" -Recurse | ForEach-Object {
    $inputFile = $_.FullName
    $outputFile = "$($inputFile -replace '\.dds$', '.png')"
    Start-Process -NoNewWindow -Wait -FilePath "magick" -ArgumentList "convert", "`"$inputFile`"", "`"$outputFile`""
}

# 모든 .dds 파일 삭제
$path = "C:\Users\lee\SnowMuffin-Game-Hub\Space_Engineers\web\public\assets\images\items"

# 현재 디렉토리로 이동
Set-Location -Path $path

# 모든 .dds 파일 삭제 (하위 디렉토리 포함)
Get-ChildItem -Filter "*.dds" -Recurse | ForEach-Object {
    Remove-Item -Path $_.FullName -Force
}