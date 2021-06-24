import 'package:flutter/material.dart';

class Botao extends StatelessWidget {
  final String label;
  final Function() onCallback;
  final ButtonStyle? style;

  Botao({
    Key? key,
    required this.label,
    required this.onCallback,
    this.style,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: ElevatedButton(
        style: style,
        // style: ElevatedButton.styleFrom(style),
        child: Text(label),
        onPressed: onCallback,
      ),
    );
  }
}

/*
Exemplo (ElevatedButton com style):
  ElevatedButton(
    style: ElevatedButton.styleFrom(primary: Colors.green),
  )
*/
