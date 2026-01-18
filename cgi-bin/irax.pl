#!/usr/bin/perl
use strict;
use warnings;
use CGI;

my $q = CGI->new;
print $q->header('text/html; charset=UTF-8');

my $text = $q->param('input') // '';

my %map = (
  'A'=>'Ä','a'=>'ä',
  'B'=>'Б','b'=>'б',
  'C'=>'Č','c'=>'č',
  'D'=>'Đ','d'=>'đ',
  'E'=>'Э','e'=>'э',
  'F'=>'Ф','f'=>'ф',
  'G'=>'Г','g'=>'г',
  'H'=>'Χ','h'=>'χ',
  'I'=>'Ι','i'=>'ι',
  'J'=>'Џ','j'=>'џ',
  'K'=>'Κ','k'=>'κ',
  'L'=>'Л','l'=>'л',
  'M'=>'Μ','m'=>'μ',
  'N'=>'Н','n'=>'н',
  'O'=>'Ο','o'=>'ο',
  'P'=>'П','p'=>'п',
  'Q'=>'Кв','q'=>'кв',
  'R'=>'Р','r'=>'р',
  'S'=>'С','s'=>'с',
  'T'=>'Τ','t'=>'τ',
  'U'=>'У','u'=>'у',
  'V'=>'В','v'=>'в',
  'W'=>'Ў','w'=>'ў',
  'X'=>'Ξ','x'=>'ξ',
  'Y'=>'Й','y'=>'й',
  'Z'=>'З','z'=>'з'
);

my $output = '';
foreach my $char (split //, $text) {
  $output .= exists $map{$char} ? $map{$char} : $char;
}

print <<HTML;
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Iräx Translation</title>
</head>
<body>
  <h1>Iräx Translation Result</h1>

  <pre>$output</pre>

  <a href="/index.html">Translate another</a>
</body>
</html>
HTML
