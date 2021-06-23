import 'package:flutter/material.dart';

class Botao extends StatelessWidget {
  final String label;
  final Function() onCallback;

  Botao({
    Key? key,
    required this.label,
    required this.onCallback,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: ElevatedButton(
        child: Text(label),
        onPressed: onCallback,
      ),
    );
  }
}
